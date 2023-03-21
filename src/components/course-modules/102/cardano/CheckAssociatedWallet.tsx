import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { gql, useLazyQuery } from "@apollo/client";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Spinner,
  Divider,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useWallet, useAddress } from "@meshsdk/react";
import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";

const TX_TO_ADDRESS_WITH_POLICYID = gql`
  query TxFromAddressWithPolicyId($address: String!, $tokenPolicyId: Hash28Hex!) {
    transactions(
      where: {
        _and: [
          { inputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
          { outputs: { address: { _eq: $address } } }
          { outputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
        ]
      }
    ) {
      hash
      inputs {
        address
        tokens {
          asset {
            policyId
          }
        }
      }
    }
  }
`;

const SPLIT_TX_FROM_CLI_ADDRESS = gql`
  query TxFromAddress($address: String!) {
    transactions(
      where: { _and: [{ inputs: { address: { _eq: $address } } }, { outputs: { address: { _eq: $address } } }] }
    ) {
      hash
    }
  }
`;

const CheckAssociatedWallet = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();

  const [cliAddress, setCliAddress] = useState<string | undefined>(undefined);

  const [getTx1, { loading: loadingTx1, error: errorTx1, data: dataTx1 }] = useLazyQuery(TX_TO_ADDRESS_WITH_POLICYID);
  const [getTx2, { loading: loadingTx2, error: errorTx2, data: dataTx2 }] = useLazyQuery(SPLIT_TX_FROM_CLI_ADDRESS);

  useEffect(() => {
    if (address) {
      getTx1({
        variables: {
          address: address,
          tokenPolicyId: contributorTokenPolicyId,
        },
      });
    }
  }, [address]);

  // pick up here
  useEffect(() => {
    const result: string = ""

    if (dataTx1) {
      dataTx1.data.transactions.forEach((tx) => tx.inputs.forEach((input) => input.tokens.)
    }



  }, [dataTx1]);

  if (loadingTx1 || loadingTx2) {
    return (
      <Center flexDirection="column">
        <Heading>Loading</Heading>
        <Spinner />
      </Center>
    );
  }

  if (errorTx1 || errorTx2) {
    return (
      <Center>
        <Heading>Error</Heading>
        {/* <pre>{JSON.stringify(error)}</pre> */}
      </Center>
    );
  }
  return (
    <Box borderColor="theme.four" bg="theme.lightGray" p="5" className="demo-component">
      <Badge size="lg">We will discuss this Component at Live Coding on 2023-04-05</Badge>
      <Heading size="md" py="3">
        Check Connected Browser Wallet for Tx with CLI Wallet
      </Heading>
      <Text w="50%" py="3">
        This query returns true iff...
      </Text>

      <pre>{JSON.stringify(dataTx1, null, 2)}</pre>

      {/* {data && (
        <>
          <Divider pt="5" />
          <Heading size="md">Query Result</Heading>
          <Box fontSize="sm" fontWeight="bold" p="2" color="theme.light">
            Address: {queryAddress}
          </Box>
          {data && (data.transactions.length > 0 ? (
          <>
            <Box bg="theme.light" color="theme.dark" mt="5" p="3" fontSize="sm">
              <Box>Success!</Box>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Box>
          </>
        ) : (
          <Box bg="theme.light" color="theme.dark" mt="5" p="3" fontSize="sm">This address does not hold a Contributor Token</Box>
        ))}
        </>
      )} */}
    </Box>
  );
};

export default CheckAssociatedWallet;
