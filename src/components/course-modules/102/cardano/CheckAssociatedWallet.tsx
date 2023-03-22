import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { gql, useLazyQuery } from "@apollo/client";
import { Box, Heading, Center, Spinner, Text, Badge } from "@chakra-ui/react";
import { useWallet, useAddress } from "@meshsdk/react";
import * as React from "react";
import { useEffect, useState } from "react";

// We use this query to get the address to which Contrib Token was sent:
const TX_FROM_ADDRESS_WITH_POLICYID = gql`
  query TxFromAddressWithPolicyId($browserWalletAddress: String!, $tokenPolicyId: Hash28Hex!) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $browserWalletAddress } } }
          { inputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
          { outputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
        ]
      }
    ) {
      hash
      includedAt
      outputs {
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

// Then use this query to confirm that the token has been returned from the CLI Wallet to the Browser Wallet:
const TX_TO_ADDRESS_WITH_POLICYID = gql`
  query TxFromAddressWithPolicyId(
    $cliWalletAddress: String!
    $browserWalletAddress: String!
    $tokenPolicyId: Hash28Hex!
  ) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $cliWalletAddress } } }
          { inputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
          { outputs: { address: { _eq: $browserWalletAddress } } }
          { outputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
        ]
      }
    ) {
      hash
    }
  }
`;

// Finally, when we know the CLI Wallet address, we check that it sent the Split UTxO Transaction to itself:
const SPLIT_TX_FROM_CLI_ADDRESS = gql`
  query TxFromAddress($cliWalletAddress: String!) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $cliWalletAddress } } }
          { outputs: { address: { _eq: $cliWalletAddress } } }
        ]
      }
    ) {
      hash
      outputs {
        address
        value
      }
    }
  }
`;

const CheckAssociatedWallet = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();

  const [cliAddress, setCliAddress] = useState<string | undefined>(undefined);
  const [contributorTokenSentBackToBrowserWallet, setContributorTokenSentBackToBrowserWallet] = useState(false);
  const [cliAddressHasSplitTx, setCliAddressHasSplitTx] = useState(false);

  const [getTx1, { loading: loadingTx1, error: errorTx1, data: dataTx1 }] = useLazyQuery(TX_FROM_ADDRESS_WITH_POLICYID);
  const [getTx2, { loading: loadingTx2, error: errorTx2, data: dataTx2 }] = useLazyQuery(TX_TO_ADDRESS_WITH_POLICYID);
  const [getTx3, { loading: loadingTx3, error: errorTx3, data: dataTx3 }] = useLazyQuery(SPLIT_TX_FROM_CLI_ADDRESS);

  useEffect(() => {
    if (address) {
      getTx1({
        variables: {
          browserWalletAddress: address,
          tokenPolicyId: contributorTokenPolicyId,
        },
      });
    }
  }, [address]);

  // If we have dataTx1, we can look at the outputs of that transaction, and set our CLI Address
  useEffect(() => {
    if (dataTx1) {
      // we may want to order the transactions from most recent - there are options here
      // After this works, refactor with Types
      const _contributorOutput = dataTx1.transactions[0].outputs.find(
        (output: any) => output.tokens[0]?.asset.policyId == contributorTokenPolicyId
      );
      const _cliAddress = _contributorOutput.address;
      setCliAddress(_cliAddress);
    }
  }, [dataTx1]);

  // If a CLI Address is found, run the TX_TO_ADDRESS_WITH_POLICYID and SPLIT_TX_FROM_CLI_ADDRESS queries
  useEffect(() => {
    if (cliAddress) {
      getTx2({
        variables: {
          cliWalletAddress: cliAddress,
          browserWalletAddress: address,
          tokenPolicyId: contributorTokenPolicyId,
        },
      });
      getTx3({
        variables: {
          cliWalletAddress: cliAddress,
        },
      });
    }
  }, [cliAddress]);

  // Was the Contributor Token sent back to the Browser Wallet?
  useEffect(() => {
    if (dataTx2 && dataTx2.transactions.length > 0) {
      setContributorTokenSentBackToBrowserWallet(true);
    }
  }, [dataTx2]);

  // And if so, did the cli wallet make the split tx?
  useEffect(() => {
    if (dataTx3 && dataTx3.transactions.length > 0) {
      const _hasThreeOutputs = dataTx3.transactions.filter((tx: any) => tx.outputs.length >= 3);
      _hasThreeOutputs.forEach((tx: any) => {
        const _ten = tx.outputs.find((output: any) => output.address == cliAddress && output.value == 10000000);
        const _fifteen = tx.outputs.find((output: any) => output.address == cliAddress && output.value == 15000000);
        const _twentyfive = tx.outputs.find((output: any) => output.address == cliAddress && output.value == 25000000);
        setCliAddressHasSplitTx(_ten && _fifteen && _twentyfive);
      });
    }
  }, [dataTx3]);


  if (loadingTx1 || loadingTx2 || loadingTx3) {
    return (
      <Center flexDirection="column">
        <Heading>Loading</Heading>
        <Spinner />
      </Center>
    );
  }

  if (errorTx1 || errorTx2 || loadingTx3) {
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

      <Text>YOUR CLI ADDRESS IS {cliAddress}</Text>

      {contributorTokenSentBackToBrowserWallet ? (
        <Box bg="theme.green" p="5">
          YES TOKEN IS RETURNED! - STATUS - SHOW BOTH ADDRESSES AND TOKEN NAME
        </Box>
      ) : (
        <Box bg="theme.green" p="5">
          No, token has not been returned!
        </Box>
      )}

      {cliAddressHasSplitTx ? (
        <Box bg="theme.green" mt="5" p="5">
          <Text>Success!</Text>
          <Text>
            The address {cliAddress} has a Split UTxO transaction with outputs of 10, 15, and 25 tADA. Nice work!
          </Text>
        </Box>
      ) : (
        <Box bg="theme.green" p="5">
          Not yet, make sure to build, sign, and submit the Split UTxO transaction described above.
        </Box>
      )}
    </Box>
  );
};

export default CheckAssociatedWallet;
