import { Box, Button, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import { useAddress, useWallet } from "@meshsdk/react";
import {
  escrowAddress,
  escrowReferenceUTxO,
  projectAsset,
  contributorPolicyID,
  issuerPolicyID,
  metadataKey,
  contributorReferenceReferenceUTxO,
} from "gpte-config";
import { useQuery } from "@apollo/client";
import { Asset, Transaction, UTxO, Data, KoiosProvider } from "@meshsdk/core";
import { ESCROW_QUERY } from "@/src/data/queries/escrowQueries";
import { hexToString } from "@/src/utils";
import { GraphQLInputUTxO, GraphQLToken, GraphQLUTxO } from "@/src/types/cardanoGraphQL";
import { ProjectTxMetadata } from "@/src/types/project";
import { contributorReferenceAddress } from "@/src/cardano/plutus/contributorReferenceValidator";
import { useState, useEffect } from "react";
import { getInlineDatumForContributorReference } from "@/src/data/queries/getInlineDatumForContributorReference";

type Props = {
  txHash: string;
};

const DistributeTx: React.FC<Props> = ({ txHash }) => {
  const { connected, wallet } = useWallet();
  const connectedAddress = useAddress();
  const koiosProvider = new KoiosProvider("preprod");

  const [contributorReferenceUTxO, setContributorReferenceUTxO] = useState<UTxO | null>(null);
  const [updatedContributorReferenceUTxO, setUpdatedContributorReferenceUTxO] = useState<Partial<UTxO> | null>(null);
  const [contributorReferenceDatum, setContributorReferenceDatum] = useState<any>(null);
  const [updatedContributorReferenceDatum, setUpdatedContributorReferenceDatum] = useState<Data | null>(null);

  const { data, loading, error } = useQuery(ESCROW_QUERY, {
    variables: {
      transactionHash: txHash,
    },
  });

  useEffect(() => {
    const fetchContributorReferenceUTxO = async () => {
      const referenceAssetId = contributorAssetId.substring(0, 56) + "313030" + contributorAssetId.substring(62);
      const _refUTxO = await koiosProvider.fetchAddressUTxOs(contributorReferenceAddress, referenceAssetId);

      const _datum = await getInlineDatumForContributorReference(referenceAssetId);

      const _luckyNumber = _datum.fields[0].int

      const _completedModules: string[] = []

      _datum.fields[1].list?.map((mastery: {bytes: string}) => {
        const desc: Data = hexToString(mastery.bytes);
        _completedModules.push(desc)
      });

      _completedModules.push(data.transactions[0].metadata[0].value.id)

      const _updatedDatum: Data = {
        alternative: 0,
        fields: [_luckyNumber, _completedModules],
      };

      const _updatedContributorReferenceUTxO: Partial<UTxO> = {
        output: {
          address: contributorReferenceAddress,
          amount: _refUTxO[0].output.amount,
        },
      };

      if (_refUTxO) {
        setContributorReferenceUTxO(_refUTxO[0]);
        setContributorReferenceDatum(_datum);
        setUpdatedContributorReferenceDatum(_updatedDatum);
        setUpdatedContributorReferenceUTxO(_updatedContributorReferenceUTxO);
      }
    };
    if (data) {
      fetchContributorReferenceUTxO();
    }
  }, [data]);

  if (loading) {
    return (
      <Center p="10">
        <Spinner size="xl" speed="1.0s" />
      </Center>
    );
  }

  if (error) {
    console.error(error);
    return <Heading size="lg">Error loading data...</Heading>;
  }

  // Create a metadata object for Distribution Tx, from Commitment Tx returned by query
  const _metadata: ProjectTxMetadata = {
    id: data.transactions[0].metadata[0].value.id,
    hash: data.transactions[0].metadata[0].value.hash,
    expTime: data.transactions[0].metadata[0].value.expTime,
    txType: "Distribute",
    contributor: data.transactions[0].metadata[0].value.contributor,
  };

  // ------------------------------------------------------------------
  // Get Commitment Details: from Escrow UTxO
  // ------------------------------------------------------------------

  const _escrowOutput = data.transactions[0].outputs.filter((i: GraphQLUTxO) => i.address == escrowAddress);

  const _escrowUTxOIndex = _escrowOutput[0].index;

  const _commitmentInlineDatum = _escrowOutput[0].datum.bytes;

  const _lovelaceInCommitment = _escrowOutput[0].value;

  const _gimbalToken = _escrowOutput[0].tokens.filter(
    (t: GraphQLToken) => t.asset.policyId == "fb45417ab92a155da3b31a8928c873eb9fd36c62184c736f189d334c"
  );

  const _gimbalsInCommitment = _gimbalToken[0].quantity;

  // ------------------------------------------------------------------
  // The Issuer Token Asset: required by Escrow Contract
  // ------------------------------------------------------------------

  let connectedIssuerTokenName: string | null = null;
  let connectedIssuerAsset: Asset | null = null;

  const fetchIssuerToken = async () => {
    const _token = await wallet.getPolicyIdAssets(issuerPolicyID);
    if (_token.length > 0) {
      connectedIssuerTokenName = _token[0].assetName;
      connectedIssuerAsset = {
        unit: _token[0].unit,
        quantity: "1",
      };
    }

    console.log(connectedIssuerAsset);
  };

  if (connected) {
    fetchIssuerToken();
  }

  let contributorAssetId: string = "";
  let contributorAddress: string = "";
  let contributorTokenName: string = "";
  let contribInput: GraphQLInputUTxO | null = null;

  function getContributorTokenAssetId(tokens: GraphQLToken[], policyId: string) {
    const contribToken = tokens.filter((t: GraphQLToken) => t.asset.policyId == policyId);

    const contributorTokenHex = contribToken[0].asset.assetName;
    const contributorTokenAssetId = policyId + contributorTokenHex;
    return contributorTokenAssetId;
  }

  // The query is for "transactions with a certain txHash", and only one Tx will ever have a given hash.
  // That's why it's ok to hard-code the array index 0 here:
  if (data) {
    const _contribInput: GraphQLInputUTxO[] = data.transactions[0].inputs.filter((i: GraphQLInputUTxO) =>
      i.tokens.some((t: GraphQLToken) => t.asset.policyId == contributorPolicyID)
    );

    const _contributorAddress = _contribInput[0].address;

    const _contributorTokenAssetId = getContributorTokenAssetId(_contribInput[0].tokens, contributorPolicyID);
    const _contributorTokenName = hexToString(_contributorTokenAssetId.substring(56));

    contribInput = _contribInput[0];
    contributorAssetId = _contributorTokenAssetId;
    contributorAddress = _contributorAddress;
    contributorTokenName = _contributorTokenName;
  }

  // ------------------------------------------------------------------
  // Construct the UTxO to send to Contributor
  // ------------------------------------------------------------------

  const lovelaceToContributor: Asset = {
    unit: "lovelace",
    quantity: _lovelaceInCommitment,
  };

  const gimbalsToContributor: Asset = {
    unit: projectAsset,
    quantity: _gimbalsInCommitment,
  };

  const contributorToken: Asset = {
    unit: contributorAssetId,
    quantity: "1",
  };

  const distributeUTxO: Partial<UTxO> = {
    output: {
      address: contributorAddress,
      amount: [lovelaceToContributor, gimbalsToContributor, contributorToken],
    },
  };

  // ------------------------------------------------------------------
  // Construct the Escrow UTxO that we're unlocking:
  // ------------------------------------------------------------------
  const _escrowContractUTxO: UTxO = {
    input: {
      txHash: txHash,
      outputIndex: _escrowUTxOIndex,
    },
    output: {
      address: escrowAddress,
      amount: [lovelaceToContributor, gimbalsToContributor, contributorToken],
      plutusData: _commitmentInlineDatum,
    },
  };

  // ------------------------------------------------------------------
  // Redeemer: 1 = "Distribute"
  // ------------------------------------------------------------------
  const distributeAction = {
    data: { alternative: 1, fields: [] },
  };

  const updateAction = {
    data: { alternative: 0, fields: [] },
  };

  // Distribute commitment (rewards + contribToken) + update 200 token's inline datum
  // Input: Issuer's wallet + escrow commitment utxo + utxo containing 200 token
  // Output: Issuer token return to Issuer + (contribToken + rewards) to Contributor + utxo with updated 200 token
  const handleDistributeTx = async () => {
    try {
      console.log("check");
      const tx = new Transaction({ initiator: wallet })
        .redeemValue({
          value: _escrowContractUTxO,
          script: escrowReferenceUTxO,
          datum: _escrowContractUTxO,
          redeemer: distributeAction,
        })
        .redeemValue({
          value: contributorReferenceUTxO,
          script: contributorReferenceReferenceUTxO,
          datum: contributorReferenceUTxO,
          redeemer: updateAction,
        })
        .sendValue(contributorAddress, distributeUTxO)
        .sendValue(
          {
            address: contributorReferenceAddress,
            datum: {
              value: updatedContributorReferenceDatum,
              inline: true,
            },
          },
          updatedContributorReferenceUTxO
        )
        .sendAssets(connectedAddress, [connectedIssuerAsset])
        .setMetadata(parseInt(metadataKey), _metadata);
      // .setRequiredSigners([contributorAddress]);
      console.log("chec11k");
      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx, true);
      const txHash = await wallet.submitTx(signedTx);
      console.log(txHash);
    } catch (error: any) {
      if (error.info) {
        alert(error.info);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Box m="5" p="5" borderColor="white" borderWidth="medium">
      <pre>ID: {JSON.stringify(_metadata.id, null, 2)}</pre>
      <pre>Contributor: {contributorTokenName}</pre>
      <pre>Lovelace: {lovelaceToContributor.quantity}</pre>
      <pre>Gimbal: {gimbalsToContributor.quantity}</pre>
      <Button colorScheme="green" onClick={handleDistributeTx}>
        Distribute
      </Button>
    </Box>
  );
};

export default DistributeTx;
