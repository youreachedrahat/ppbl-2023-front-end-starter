import {
  Box,
  Text,
  Heading,
  Button,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Spinner,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Transaction, Mint, Action, AssetMetadata, Data, Recipient } from "@meshsdk/core";
import { useWallet, useAddress } from "@meshsdk/react";
import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";
import { contributorPlutusMintingScript } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { contributorReferenceAddress } from "@/src/cardano/plutus/contributorReferenceValidator";
import { gql, useQuery } from "@apollo/client";
import { hexToString } from "@/src/utils";

const CONTRIBUTOR_TOKEN_QUERY = gql`
  query GetTreasuryUTxOs($contractAddress: String!) {
    utxos(where: { address: { _eq: $contractAddress } }) {
      value
      tokens {
        asset {
          policyId
          assetName
        }
        quantity
      }
    }
  }
`;

const ContributorPairMintingComponent = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const [asset, setAsset] = useState<Mint | undefined>(undefined);

  const [contributorTokenName, setContributorTokenName] = useState<string | undefined>(undefined);
  const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);

  const tokenNameList: string[] = []

  // Chakra Modal -> Successful Minting Tx
  const { isOpen: isSuccessOpen, onOpen: onSuccessOpen, onClose: onSuccessClose } = useDisclosure();
  const { isOpen: isErrorOpen, onOpen: onErrorOpen, onClose: onErrorClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      contributorAlias: "",
    },
    onSubmit: (values) => {
      alert("Success!");
    },
  });

  useEffect(() => {
    const _name = "PPBL2023" + formik.values.contributorAlias;
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

  // const { data, loading, error } = useQuery(CONTRIBUTOR_TOKEN_QUERY, {
  //   variables: {
  //     contractAddress: contributorReferenceAddress,
  //   },
  // });

  // if (loading) {
  //   return (
  //     <Center p="10">
  //       <Spinner size="xl" speed="1.0s" />
  //     </Center>
  //   );
  // }

  // if (error) {
  //   console.error(error);
  //   return <Heading size="lg">Error loading data...</Heading>;
  // }

  // data?.utxos.forEach((utxo: any) => {

  //     tokenNameList.push(hexToString(utxo.tokens[0].asset.assetName).substring(3))
  
  // })

  const handleMintingTransaction = async () => {
    if (address && contributorTokenName && contributorTokenName != "PPBL2023") {
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
      try {
        const tx = new Transaction({ initiator: wallet });
        tx.mintAsset(contributorPlutusMintingScript, _contribAsset, redeemer);
        tx.mintAsset(contributorPlutusMintingScript, _referenceAsset, redeemer);
        const unsignedTx = await tx.build();
        const userSignedTx = await wallet.signTx(unsignedTx, true);
        const txHash = await wallet.submitTx(userSignedTx);
        console.log("Success!", txHash);
        setSuccessfulTxHash(txHash);
        onSuccessOpen();
      } catch (error: any) {
        alert(error);
        console.log(error);
      }
    } else {
      alert("Please enter a unique alias for your token.");
    }
  };

  return (
    <>
      <Box borderColor="theme.four" fontSize="lg" lineHeight="9">
        <Heading size="md" py="3">
          Mint a Contributor Token Pair
        </Heading>
        <FormControl color="theme.dark">
          <FormLabel color="theme.light">Write Your Alias Here</FormLabel>
          <Input
            mb="3"
            bg="white"
            id="contributorAlias"
            name="contributorAlias"
            onChange={formik.handleChange}
            value={formik.values.contributorAlias}
            placeholder="Enter an Alias for your token"
          />
          <FormHelperText py="2">Preview the name of your token on this button:</FormHelperText>
        </FormControl>
        {/* {contributorTokenName && tokenNameList.includes(contributorTokenName) ? (
          <Text>Please choose a unique token name.</Text>
        ) : (
          <Button colorScheme="green" onClick={handleMintingTransaction}>
            Mint Your {contributorTokenName}
          </Button>
        )} */}
        <Button colorScheme="green" onClick={handleMintingTransaction}>
            Mint Your {contributorTokenName}
          </Button>
        {/* <Accordion allowToggle py="5">
          <AccordionItem>
            <AccordionButton>
              <Text py="3">
                Is your token name unique? Click here to view a list of PPBL2023 Tokens that have been minted so far.
              </Text>
            </AccordionButton>
            <AccordionPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                {tokenNameList.map((tName: any, i: number) => (
                  <GridItem key={i} p="1" bg="theme.light" color="theme.dark">
                    <Text fontSize="sm" fontWeight="bold">
                      {tName}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion> */}
      </Box>
      <Modal
        key="successMintingModal"
        size="lg"
        blockScrollOnMount={false}
        isOpen={isSuccessOpen}
        onClose={onSuccessClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl">Success: Minting Transaction Submitted</ModalHeader>
          <ModalBody>
            <Text py="2">Minting Transaction Hash: {successfulTxHash}</Text>
            <Text py="2">It may take a few minutes for this tx to show up on a blockchain explorer. Wait a few minutes and then refresh this page to see how it changes.</Text>
          </ModalBody>
          <ModalFooter>
            <Button bg="white" color="gray.700" onClick={onSuccessClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContributorPairMintingComponent;
