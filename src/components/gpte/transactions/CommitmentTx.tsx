import {
  Box,
  Button,
  Heading,
  Text,
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spacer,
} from "@chakra-ui/react";
import {
  Action,
  Asset,
  AssetExtended,
  Data,
  resolveDataHash,
  resolvePaymentKeyHash,
  Transaction,
  UTxO,
} from "@meshsdk/core";
import { useAddress, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";
import { GraphQLUTxO } from "@/src/types/cardanoGraphQL";
import { contributorPolicyID, escrow, projectAsset, treasury, treasuryReferenceUTxO } from "@/gpte-config";
import { ProjectDatum, ProjectTxMetadata } from "@/src/types/project";
import { GraphQLToDatum, GraphQLToMeshUTxO, stringToHex } from "@/src/utils";

type Props = {
  selectedProject: string;
  treasuryUTxO: GraphQLUTxO;
};

const CommitmentTx: React.FC<Props> = ({ selectedProject, treasuryUTxO }) => {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const [contributorAddress, setContributorAddress] = useState<string>("");
  const [connectedPKH, setConnectedPKH] = useState<string>("");
  const [connectedContributorToken, setConnectedContributorToken] = useState<AssetExtended | undefined>(undefined);
  const [connectedUtxos, setConnectedUtxos] = useState<UTxO[]>([]);

  const treasuryContractUTxO = GraphQLToMeshUTxO(treasuryUTxO);
  const treasuryContractDatum = GraphQLToDatum(treasuryUTxO);

  const constructedTreasuryDatum: Data = {
    alternative: 0,
    fields: [treasuryContractDatum, "5050424c3230323354656163686572"],
  };

  const newTreasuryDatumHash = resolveDataHash(constructedTreasuryDatum);

  // UI Helpers:
  const [txLoading, setTxLoading] = useState(false);
  const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);
  const [loadContrib, setLoadContrib] = useState(true);

  // Commitment can expire after any specified amount of time
  const [expirationTime, setExpirationTime] = useState(0); // POSIX time, in milliseconds
  const [expirationDate, setExpirationDate] = useState(""); // user-friendly date string

  // Specific to each Project:
  const [currentProjectDatum, setCurrentProjectDatum] = useState<ProjectDatum | null>(null);
  const [currentTreasuryRedeemer, setCurrentTreasuryRedeemer] = useState<Partial<Action> | null>(null);
  const [projectDatumHash, setProjectDatumHash] = useState<string>("");
  const [projectTxMetadata, setProjectTxMetadata] = useState<ProjectTxMetadata | null>(null);
  const [constructedProjectDatum, setConstructedProjectDatum] = useState<Data | undefined>(undefined);

  // Transaction Building:
  const [utxoBackToTreasury, setUtxoBackToTreasury] = useState<Partial<UTxO> | undefined>(undefined);
  const [utxoToProjectEscrow, setUtxoToProjectEscrow] = useState<Partial<UTxO> | undefined>(undefined);

  // For Chakra Modal:
  const { isOpen: isConfirmationOpen, onOpen: onConfirmationOpen, onClose: onConfirmationClose } = useDisclosure();
  const { isOpen: isSuccessOpen, onOpen: onSuccessOpen, onClose: onSuccessClose } = useDisclosure();
  const toast = useToast();

  // Set current time and expirationTime
  useEffect(() => {
    const _expTime = new Date(Date.now());
    const currentMonth = _expTime.getMonth();
    _expTime.setMonth(currentMonth + 1);
    const result = _expTime.valueOf();
    const resultString = _expTime.toLocaleDateString();
    setExpirationTime(result);
    setExpirationDate(resultString);
  }, []);

  useEffect(() => {
    if (!utxoBackToTreasury) setLoadContrib(false);
  });

  // Check the connected wallet for Contributor tokens
  // If there are many, return the first one in the list returned by getPolicyIdAssets
  // To do: Implement Contributor token selection
  useEffect(() => {
    const fetchContributorToken = async () => {
      const _token = await wallet.getPolicyIdAssets(contributorPolicyID);
      if (_token.length > 0) {
        setConnectedContributorToken(_token[0]);
      }
    };

    const fetchContributorUtxo = async () => {
      const _utxos = await wallet.getUtxos();
      if (_utxos.length > 0) {
        setConnectedUtxos(_utxos);
      }
    };

    if (connected) {
      fetchContributorToken();
      fetchContributorUtxo();
      setLoadContrib(true);
    }
  }, [connected, loadContrib]);

  // Get the pkh of specific address for the UTxO holding Contributor Token
  // This allows us to handle wallets with multiple derived addresses
  useEffect(() => {
    if (connectedUtxos && connectedContributorToken) {
      const utxoWithContribToken = connectedUtxos.filter(
        (utxo) => utxo.output.amount.filter((a) => a.unit == connectedContributorToken.unit).length > 0
      );
      console.log("Contrib utxos", utxoWithContribToken);
      const _contribAddress = utxoWithContribToken[0].output.address;
      setContributorAddress(_contribAddress);
      const result = resolvePaymentKeyHash(_contribAddress);
      setConnectedPKH(result);
    }
  }, [connectedUtxos]);

  // Create the Project Datum and Project Metadata
  // Trigger useEffect to update when wallet is connected, or if expirationTime changes
  useEffect(() => {
    const _result: ProjectDatum = {
      contributorPkh: connectedPKH,
      lovelace: 2000000,
      gimbals: 10,
      expirationTime: expirationTime,
      projectHash: stringToHex(selectedProject),
    };
    const _metadata: ProjectTxMetadata = {
      id: selectedProject,
      hash: stringToHex(selectedProject),
      expTime: expirationTime,
      txType: "Commitment",
      contributor: connectedPKH,
    };
    setCurrentProjectDatum(_result);
    setProjectTxMetadata(_metadata);
  }, [connected, expirationTime, connectedPKH, selectedProject]);

  // constructedProjectDatum is formatted for serialized transaction, using Mesh Data type
  useEffect(() => {
    if (currentProjectDatum) {
      const _datumConstructor: Data = {
        alternative: 0,
        fields: [
          currentProjectDatum.contributorPkh,
          currentProjectDatum.lovelace,
          currentProjectDatum.gimbals,
          currentProjectDatum.expirationTime,
          currentProjectDatum.projectHash,
        ],
      };

      console.log("Build Escrow Datum:", _datumConstructor);
      setConstructedProjectDatum(_datumConstructor);
      const result = resolveDataHash(_datumConstructor);
      setProjectDatumHash(result);
    }
  }, [currentProjectDatum]);

  // Set the data treasuryRedeemer to match constructedProjectDatum,
  // because in GPTE Contracts, the Treasury Redeemer and Project Datum consist of the same parameters.
  useEffect(() => {
    if (constructedProjectDatum) {
      const _treasuryRedeemer: Partial<Action> = {
        data: {
          alternative: 0,
          fields: [constructedProjectDatum],
        },
      };
      setCurrentTreasuryRedeemer(_treasuryRedeemer);
    }
  }, [constructedProjectDatum]);

  // Create the UTxOs to be included in .sendValue() to Treasury and Escrow contracts
  // UTxO type looks like this:
  // -----------------------------------------------------------
  // export declare type UTxO = {
  //     input: {
  //         outputIndex: number;
  //         txHash: string;
  //     };
  //     output: {
  //         address: string;
  //         amount: Asset[];
  //         dataHash?: string;
  //         plutusData?: string;
  //         scriptRef?: string;
  //     };
  // };
  // -----------------------------------------------------------
  // Here, we use the output: {} in a Partial<UTxO>, and do not include input: {}. This approach is compatible with .sendValue(),
  // and allows us to specify the number of Lovelace in each output.
  //
  // Note also that Asset[] is constructed first for each UTxO.
  // If you are unfamiliar with TypeScript, this is a helpful example to study.
  useEffect(() => {
    if (connectedContributorToken && treasuryUTxO) {
      const assetsAtTreasury: Asset[] = treasuryContractUTxO.output.amount;

      // Calculate the number of Lovelace that will be sent back to Treasury
      const lovelaceAtTreasury = assetsAtTreasury.filter((asset) => asset.unit === "lovelace");
      const numberLovelaceAtTreasury = parseInt(lovelaceAtTreasury[0].quantity);
      const numberLovelaceBackToTreasury = numberLovelaceAtTreasury - 2000000;

      const gimbalsAtTreasury = assetsAtTreasury.filter((asset) => asset.unit === projectAsset);
      const numberGimbalsAtTreasury = parseInt(gimbalsAtTreasury[0].quantity);
      const numberGimbalsBackToTreasury = numberGimbalsAtTreasury - 10;

      // Not using in this course tracking implementation of GPTE
      // Calculate the number of tgimbals that will be sent back to Treasury
      // const gimbalsAtTreasury = assetsAtTreasury.filter(
      //   (asset) => asset.unit === projectAsset
      // );
      // const gimbalsInCommitment = gimbalsWithZeros;
      // const numberGimbalsAtTreasury = parseInt(gimbalsAtTreasury[0].quantity);
      // const numberGimbalsBackToTreasury =
      //   numberGimbalsAtTreasury - gimbalsInCommitment;

      // Create Asset[] for each output UTxO
      const _assetsBackToTreasury: Asset[] = [
        {
          unit: "lovelace",
          quantity: numberLovelaceBackToTreasury.toString(),
        },
        {
          unit: projectAsset,
          quantity: numberGimbalsBackToTreasury.toString(),
        },
      ];

      // Replace these amounts with dynamic values (form / selection)
      const _assetsToProjectEscrow: Asset[] = [
        {
          unit: "lovelace",
          quantity: "2000000",
        },
        {
          unit: projectAsset,
          quantity: "10",
        },
        {
          unit: connectedContributorToken.unit,
          quantity: "1",
        },
      ];

      // Create the UTxOs
      const _utxoTreasury: Partial<UTxO> = {
        output: {
          address: treasury.address,
          amount: _assetsBackToTreasury,
        },
      };

      const _utxoProjectEscrow: Partial<UTxO> = {
        output: {
          address: escrow.address,
          amount: _assetsToProjectEscrow,
        },
      };

      setUtxoBackToTreasury(_utxoTreasury);
      setUtxoToProjectEscrow(_utxoProjectEscrow);
    }
  }, [connected, connectedContributorToken]);

  const handleCommitmentTx = async () => {
    if (contributorAddress) {
      setTxLoading(true);
      try {
        const tx = new Transaction({ initiator: wallet })
          .redeemValue({
            value: treasuryContractUTxO,
            script: treasuryReferenceUTxO,
            datum: treasuryContractUTxO,
            redeemer: currentTreasuryRedeemer,
          })
          .sendValue(
            {
              address: treasury.address,
              datum: {
                value: constructedTreasuryDatum,
                inline: true,
              },
            },
            utxoBackToTreasury
          )
          .sendValue(
            {
              address: escrow.address,
              datum: {
                value: constructedProjectDatum,
                inline: true,
              },
            },
            utxoToProjectEscrow
          )
          .setMetadata(parseInt(treasury.metadataKey), projectTxMetadata)
          .setRequiredSigners([contributorAddress]);
        console.log("So far so good.", tx);

        const unsignedTx = await tx.build();
        const signedTx = await wallet.signTx(unsignedTx, true);
        const txHash = await wallet.submitTx(signedTx);
        setSuccessfulTxHash(txHash);
        onSuccessOpen();
      } catch (error: any) {
        if (error.info) {
          alert(error.info);
        } else {
          console.log(error);
        }
      }
      setTxLoading(false);
    }
  };

  return (
    <>
      <Box py="3">
        <Heading py="3">Commit to {selectedProject}</Heading>
        <Button colorScheme="orange" onClick={onConfirmationOpen}>
          Commit to {selectedProject}
        </Button>

        {/* DEV STUFF */}
        {/* <Box m="2" p="5" bg="theme.light" color="theme.dark">
          <Heading size="md">Dev Stuff</Heading>
          <Text>Connnected at {address}</Text>
          <Text>With Contrib Token: {JSON.stringify(connectedContributorToken)}</Text>
          <Text py="3">
            Treasury Datum: <pre>{JSON.stringify(constructedTreasuryDatum, null, 2)}</pre>
          </Text>
          <Text py="3">
            Treasury Datum Hash: <pre>{newTreasuryDatumHash}</pre>
          </Text>
          <Text py="3">
            Treasury Redeemer: <pre>{JSON.stringify(currentTreasuryRedeemer, null, 2)}</pre>
          </Text>
          <Text py="3">
            Escrow Datum: <pre>{JSON.stringify(constructedProjectDatum, null, 2)}</pre>
          </Text>
        </Box> */}
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isSuccessOpen} onClose={onSuccessClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Successful Commitment to {selectedProject}</ModalHeader>
          <ModalBody>
            <Text py="2">Transaction ID: {successfulTxHash}</Text>
            <Text py="2">It may take a few minutes for this tx to show up on a blockchain explorer.</Text>
          </ModalBody>
          <ModalFooter>
            <Button bg="white" color="gray.700" onClick={onSuccessClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal blockScrollOnMount={false} isOpen={isConfirmationOpen} onClose={onConfirmationClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation Commitment to {selectedProject}</ModalHeader>
          <ModalBody>
            <Text py="2">Your PPBL 2023 Token will be locked.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" onClick={handleCommitmentTx}>
              Commit to {selectedProject}
            </Button>
            <Spacer />
            <Button bg="white" color="gray.700" onClick={onConfirmationClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommitmentTx;
