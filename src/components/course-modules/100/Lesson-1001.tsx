import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Grid, GridItem, Stack, StackDivider, Text } from "@chakra-ui/react";
import { CardanoWallet, useAddress, useNetwork, useWallet } from "@meshsdk/react";

export default function Lesson1001() {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();

  return (
    <Stack marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
      <SLT id="100.1">I can connect a Cardano wallet to the pre-production test network</SLT>
      <GridItem colSpan={2} w="50%" mx="auto">
        <VideoComponent videoId="aa">Using a Testnet</VideoComponent>
      </GridItem>
      <AssignmentComponent>
        <Text py="5">Try to connect a wallet. Make sure it is on a test network!</Text>
        <Box mb="20">
          <CardanoWallet />
        </Box>

        <Box bg="theme.light" color="theme.dark" p="5">
          {connected ? <Box>{network == 0 ? "Success!" : "Time to troubleshoot. There are a few things that could be going on."}</Box> : "No wallet is connected. Try to connect one. If it does not work, there a few potential reasons for this. Watch the video above to learn more."}
        </Box>
      </AssignmentComponent>
      <SuccessComponent mastery={connected && network == 0}>You are connected to a Cardano Testnet - how can we handle more a interactive success message here?</SuccessComponent>
    </Stack>
  );
}
