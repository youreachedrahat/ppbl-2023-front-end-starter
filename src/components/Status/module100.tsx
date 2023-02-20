import { Box, Text, Flex } from "@chakra-ui/react";
import { Asset } from "@meshsdk/core";
import { useAddress, useAssets, useLovelace, useNetwork, useWallet } from "@meshsdk/react";
import * as React from "react";
import { useState, useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

const StatusBox = ({ condition, text }: { condition: boolean; text: string }) => {
  return (
    <Box
      bg={condition ? "green.400" : "yellow.100"}
      color={condition ? "white" : "black"}
      w="100%"
      px="2"
      py="2"
      fontSize="sm"
      border="1px solid"
      borderColor='whiteAlpha'
      >
        <Text>{text}</Text>
    </Box>

  );
};

const Status100: React.FC<Props> = ({ children }) => {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();
  const lovelaceString = useLovelace();

  const walletAssets = useAssets();
  const [connectedPPBL2023Token, setConnectedPPBL2023Token] = useState<Asset | undefined>(undefined);

  useEffect(() => {
    if (walletAssets) {
      const _ppbl2023 = walletAssets.filter(
        (a: Asset) => a.unit.substring(0, 56) == "05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056"
      );
      setConnectedPPBL2023Token(_ppbl2023[0]);
    }
  }, [walletAssets]);

  const test3 = false;

  return (
    <Flex direction="row" justifyContent="center" alignItems="center">
        <StatusBox condition={connected && (network == 0)} text="100.1: Wallet connected" />
        <StatusBox condition={network === 0 && Boolean(Number (lovelaceString) > 0)} text="100.2: Wallet has lovelace" />
        <StatusBox condition={test3} text="100.3: Question for Team" />
        <StatusBox condition={connectedPPBL2023Token != undefined} text="100.4: PPBL2023 Token" />
    </Flex>
  );
};

export default Status100;
