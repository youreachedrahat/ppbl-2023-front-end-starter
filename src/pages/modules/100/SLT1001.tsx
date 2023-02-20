import AssignmentComponent from "@/src/components/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/Lesson/VideoComponent";
import SLT from "@/src/components/Text/SLT";
import { Box, Grid, Stack, StackDivider, Text } from "@chakra-ui/react";
import { CardanoWallet, useAddress, useNetwork, useWallet } from "@meshsdk/react";

export default function SLT1001() {
    const { connected, wallet } = useWallet();
    const address = useAddress();
    const network = useNetwork();
  
    return (
        <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
        <SLT id="100.1">I can connect a Cardano wallet to the pre-production test network</SLT>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <AssignmentComponent>
            <Text py="5">Try to connect a wallet. Make sure it is on a test network!</Text>
            <Box mb="20">
              <CardanoWallet />
            </Box>
            {connected ? (
              <Box>
                {network == 0 ? (
                  "Success!"
                ) : (
                  "Check network connection"
                )}
              </Box>
            ) : (
              "Not connected"
            )}
          </AssignmentComponent>
          <SuccessComponent mastery={network == 0}>You are connected to a Cardano Testnet</SuccessComponent>
        </Grid>
  
        <VideoComponent videoId="aa">Placeholder Video (for demo)</VideoComponent>
      </Stack>
    );
  }
  