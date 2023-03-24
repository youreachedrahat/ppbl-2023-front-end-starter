import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { gql, useLazyQuery } from "@apollo/client";
import { Box, Heading, Center, Spinner, Text, Badge, Flex, Stack, Divider, Spacer } from "@chakra-ui/react";
import { useWallet, useAddress, CardanoWallet } from "@meshsdk/react";
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

type Props = {
  children?: React.ReactNode;
};

const LoadingComponent: React.FC<Props> = ({ children }) => {
  return (
    <Center flexDirection="row" bg="theme.yellow" color="theme.dark" my="1">
      <Spacer />
      <Text>Loading: {children}</Text>
      <Spacer />
      <Spinner />
      <Spacer />
    </Center>
  );
};

const ErrorComponent: React.FC<Props> = ({ children }) => {
  return (
    <Center>
      <Heading>Error</Heading>
      <Text>{children}</Text>
      {/* <pre>{JSON.stringify(error)}</pre> */}
    </Center>
  );
};

const ConnectWalletMessage = () => {
  return (
    <Box bg="theme.yellow" color="theme.dark" p="1">
      Connect a Browser Wallet
    </Box>
  );
};

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
    if (dataTx1 && dataTx1.transactions.length > 0) {
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

  return (
    <Box borderColor="theme.four" bg="theme.lightGray" p="3" className="demo-component">
      <Badge size="lg">We will discuss this Component at Live Coding on 2023-04-05</Badge>
      <Heading size="md" py="1">
        Connect Browser Wallet and Check Associated CLI Wallet
      </Heading>
      <Stack>
        <Box mt="3" pt="1" bg="theme.blue" color="theme.dark">
          <Text pl="1" pt="1" fontSize="xl" fontWeight="bold" color="theme.dark">
            Get CLI Address
          </Text>
          {loadingTx1 && <LoadingComponent>Getting Transactions from Browser Wallet</LoadingComponent>}
          {errorTx1 && <ErrorComponent />}
          {dataTx1 && (
            <>
              {cliAddress ? (
                <Box bg="theme.green" color="theme.dark" p="1">
                  <Text fontSize="sm">Your CLI Wallet Address: {cliAddress}</Text>
                </Box>
              ) : (
                <Box bg="theme.yellow" p="1">
                  <Text fontSize="sm">
                    There is no CLI Wallet associated with this Browser Wallet. Try sending your PPBL2023 Token to your
                    CLI Address.
                  </Text>
                </Box>
              )}
            </>
          )}
          {!dataTx1 && <ConnectWalletMessage />}
        </Box>
        <Box mt="3" pt="1" bg="theme.blue" color="theme.dark">
          <Text pl="1" pt="1" fontSize="xl" fontWeight="bold" color="theme.dark">
            Check that CLI Address sent PPBL2023 Token back to Browser Address
          </Text>
          {loadingTx2 && <LoadingComponent>Getting Transactions from CLI Wallet to Browser Wallet</LoadingComponent>}
          {errorTx2 && <ErrorComponent />}
          {dataTx2 && (
            <>
              {contributorTokenSentBackToBrowserWallet ? (
                <Box bg="theme.green" color="theme.dark" p="1">
                  <Text fontSize="sm">Your PPBL2023 has been sent back to the wallet.</Text>
                </Box>
              ) : (
                <Box bg="theme.yellow" p="3">
                  <Text fontSize="sm">
                    There is no CLI Wallet associated with this Browser Wallet. Try sending Tx #2, as shown above.
                  </Text>
                </Box>
              )}
            </>
          )}
        </Box>
        <Box mt="3" pt="1" bg="theme.blue" color="theme.dark">
          <Text pl="1" pt="1" fontSize="xl" fontWeight="bold" color="theme.dark">
            Check CLI Address sent SplitUTxO Tx
          </Text>
          {loadingTx3 && <LoadingComponent>Checking CLI Wallet for SplitUTxO Tx</LoadingComponent>}
          {errorTx3 && <ErrorComponent />}
          {dataTx3 && (
            <>
              {cliAddressHasSplitTx ? (
                <Box bg="theme.green" color="theme.dark" p="1">
                  <Text fontSize="sm">SUCCESS: Your CLI Address successfully sent the SplitUTxO transaction!</Text>
                </Box>
              ) : (
                <Box bg="theme.yellow" p="1">
                  <Text fontSize="sm">Not yet, make sure to build, sign, and submit Tx #1, as described above.</Text>
                </Box>
              )}
            </>
          )}
        </Box>
      </Stack>
      <Divider my="5" py="5" />
      <CardanoWallet />
    </Box>
  );
};

export default CheckAssociatedWallet;
