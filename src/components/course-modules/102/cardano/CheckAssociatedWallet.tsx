import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { useLazyQuery } from "@apollo/client";
import { Box, Heading, Center, Spinner, Text, Badge, Flex, Stack, Divider, Spacer } from "@chakra-ui/react";
import { useWallet, useAddress, CardanoWallet } from "@meshsdk/react";
import * as React from "react";
import { useEffect, useState } from "react";

// Possible todo: add loading and error states to context? Learn best approach.
type Props = {
  children?: React.ReactNode;
  masteryStatus: {
    cliWallet: string;
    successTx1: boolean;
    successTx2: boolean;
  };
};

const ConnectWalletMessage = () => {
  return (
    <Box bg="red.300" color="theme.dark" p="1">
      Connect a Browser Wallet
    </Box>
  );
};

const CheckAssociatedWallet: React.FC<Props> = ({ children, masteryStatus }) => {
  return (
    <Box borderColor="theme.four" bg="theme.lightGray" p="3" className="demo-component">
      <Badge size="lg">We will discuss this Component at Live Coding on 2023-04-05</Badge>
      <Heading size="lg" my="5">
        Connect Your Browser Wallet to Check Associated CLI Wallet
      </Heading>
      <Stack>
        <Box mt="3" pt="1" bg="theme.blue" color="theme.dark">
          <Text pl="1" pt="1" fontSize="xl" fontWeight="bold" color="theme.dark">
            Get CLI Address
          </Text>
          {/* {loadingTx1 && <LoadingComponent>Getting Transactions from Browser Wallet</LoadingComponent>}
          {errorTx1 && <ErrorComponent />} */}
          {masteryStatus.cliWallet.length == 0 && <ConnectWalletMessage />}
          {masteryStatus.cliWallet ? (
            <Box bg="theme.green" color="theme.dark" p="1">
              <Text fontSize="sm">Your CLI Wallet Address: {masteryStatus.cliWallet}</Text>
            </Box>
          ) : (
            <Box bg="theme.yellow" p="1">
              <Text fontSize="sm">
                There is no CLI Wallet associated with this Browser Wallet. Try sending your PPBL2023 Token to your CLI
                Address.
              </Text>
            </Box>
          )}
        </Box>
        <Box mt="3" pt="1" bg="theme.blue" color="theme.dark">
          <Text pl="1" pt="1" fontSize="xl" fontWeight="bold" color="theme.dark">
            Check that CLI Address sent PPBL2023 Token back to Browser Address
          </Text>
          {/* {loadingTx2 && <LoadingComponent>Getting Transactions from CLI Wallet to Browser Wallet</LoadingComponent>}
          {errorTx2 && <ErrorComponent />} */}
          {masteryStatus.successTx1 ? (
            <Box bg="theme.green" color="theme.dark" p="1">
              <Text fontSize="sm">Your PPBL2023 Token has been sent back to the connected browser wallet.</Text>
            </Box>
          ) : (
            <Box bg="theme.yellow" p="3">
              <Text fontSize="sm">
                There is no CLI Wallet associated with this Browser Wallet. Try sending Tx #2, as shown above.
              </Text>
            </Box>
          )}
        </Box>
        <Box mt="3" pt="1" bg="theme.blue" color="theme.dark">
          <Text pl="1" pt="1" fontSize="xl" fontWeight="bold" color="theme.dark">
            Check CLI Address sent SplitUTxO Tx
          </Text>
          {/* {loadingTx3 && <LoadingComponent>Checking CLI Wallet for SplitUTxO Tx</LoadingComponent>}
          {errorTx3 && <ErrorComponent />} */}
          {masteryStatus.successTx1 ? (
            <Box bg="theme.green" color="theme.dark" p="1">
              <Text fontSize="sm">SUCCESS: Your CLI Address successfully sent the SplitUTxO transaction!</Text>
            </Box>
          ) : (
            <Box bg="theme.yellow" p="1">
              <Text fontSize="sm">Not yet, make sure to build, sign, and submit Tx #1, as described above.</Text>
            </Box>
          )}
        </Box>
      </Stack>
      <Divider my="5" py="5" />
      <CardanoWallet />
    </Box>
  );
};

export default CheckAssociatedWallet;
