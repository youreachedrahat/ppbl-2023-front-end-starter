import { Box } from "@chakra-ui/react";
import { CardanoWallet } from "@meshsdk/react";

export const ConnectWalletMessage = () => {
  return (
    <Box pb="12">
      <Box bg="red.300" color="theme.dark" p="1">
        Connect a Browser Wallet
      </Box>
      <CardanoWallet />
    </Box>
  );
};
