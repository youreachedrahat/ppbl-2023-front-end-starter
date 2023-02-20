import { Box, Text, Heading, Button, FormControl, Input } from "@chakra-ui/react";
import { Transaction, Mint, Action, AssetMetadata, Data, Recipient } from "@meshsdk/core";
import { useWallet, useAddress } from "@meshsdk/react";
import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";
import { contributorPlutusMintingScript } from "@/cardano/plutus/contributorPlutusMintingScript"; 
import { contributorReferenceAddress } from "@/cardano/plutus/contributorReferenceValidator";

const ContributorPairMintingComponent = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const [asset, setAsset] = useState<Mint | undefined>(undefined);

  const [contributorTokenName, setContributorTokenName] = useState<string | undefined>(undefined);

  const formik = useFormik({
    initialValues: {
      contributorAlias: "",
    },
    onSubmit: (values) => {
      alert("Success!");
    },
  });

  useEffect(() => {
    const _name = "PPBL2023Demo" + formik.values.contributorAlias;
    setContributorTokenName(_name);
  }, [formik.values.contributorAlias]);

  const contributor_datum: Data = {
    alternative: 0,
    fields: [5, []],
  };

  const referenceTokenRecipient: Recipient = {
    address: contributorReferenceAddress,
    datum: {
      value: contributor_datum,
      inline: true,
    },
  };

  // Add a form to enter the Redeemer number
  const redeemer: Partial<Action> = {
    tag: "MINT",
    data: 1618033988,
  };

  const handleMintingTransaction = async () => {
    if (address && contributorTokenName && contributorTokenName != "PPBL2023Demo") {
      const assetMetadata: AssetMetadata = {
        name: contributorTokenName,
        image: "https://www.gimbalabs.com/g.png",
      };
      const _contribAsset: Mint = {
        assetName: "100" + contributorTokenName,
        assetQuantity: "1",
        metadata: assetMetadata,
        label: "721",
        recipient: referenceTokenRecipient,
      };
      const _referenceAsset: Mint = {
        assetName: "222" + contributorTokenName,
        assetQuantity: "1",
        metadata: assetMetadata,
        label: "721",
        recipient: address,
      };
      const tx = new Transaction({ initiator: wallet });
      tx.mintAsset(contributorPlutusMintingScript, _contribAsset, redeemer);
      tx.mintAsset(contributorPlutusMintingScript, _referenceAsset, redeemer);
      const unsignedTx = await tx.build();
      const userSignedTx = await wallet.signTx(unsignedTx, true);
      const txHash = await wallet.submitTx(userSignedTx);
      console.log("Success!", txHash);
    } else {
      alert("Please enter a unique alias for your token.");
    }
  };

  return (
    <Box borderLeft="2px" borderColor="theme.four" my="3" pl="5" fontSize="lg" lineHeight="9">
      <Heading size="md" py="3">
        Mint a Contributor Token Pair
      </Heading>
      <FormControl color="black">
        <Input
          my="3"
          bg="white"
          id="contributorAlias"
          name="contributorAlias"
          onChange={formik.handleChange}
          value={formik.values.contributorAlias}
          placeholder="Enter Contributor Address"
        />
      </FormControl>
      <Button colorScheme="green" onClick={handleMintingTransaction}>
        Mint Your {contributorTokenName}
      </Button>
    </Box>
  );
};

export default ContributorPairMintingComponent;
