import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import SLT from "@/src/components/ui/Text/SLT";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { CardanoWallet, useAddress, useNetwork, useWallet } from "@meshsdk/react";
import Link from "next/link";

export default function Lesson1001() {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();

  return (
    <>
      <Box w="90%" marginLeft="1em" marginTop="2em">
        <SLT id="100.1">I can connect a Cardano wallet to the pre-production test network.</SLT>
        <Divider py="5" />

        <Grid mx="auto" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="90%" mx="auto">
            <Text fontSize="lg" py="3">
              Usually, when we talk about Cardano, we are talking about the "Cardano Mainnet".
            </Text>
            <Text fontSize="lg" py="3">
              But Mainnet is not the only Cardano network. Cardano is a protocol: this means that it can be re-used to
              create any number of new networks.
            </Text>
            <Text fontSize="lg" py="3">
              We do not want to test new decentralized applications on the Mainnet: if we made a mistake, we would lose
              tokens that have a real value!
            </Text>
            <Text fontSize="lg" py="3">
              That's why in this course we will use Cardano's "pre-production test network" also known as "Preprod".
              Your first task in PPBL 2023 is to connect a browser-based wallet to Preprod.
            </Text>
          </GridItem>
          <GridItem>
            <VideoComponent videoId="9hwa4wEl41k">How to connect your wallet to Pre-Production Testnet:</VideoComponent>
          </GridItem>
        </Grid>
        <Divider py="5" />
        <Box w="80%" mx="auto" my="5" p="5" bg="theme.lightGray" border="1px" borderColor="theme.light" borderRadius="lg">
          <AssignmentComponent>
            <OrderedList>
              <ListItem>Make sure that you have a browser wallet like Nami or Eternl installed.</ListItem>
              <ListItem>Review the short video above to see how to connect your wallet to Preprod.</ListItem>
              <ListItem>Use the Connect Wallet button below to see if you are successful!</ListItem>
            </OrderedList>
            <Text py="5">Try to connect a wallet. Make sure it is on Cardano's Pre-Production test network.</Text>
            <Box mb="20">
              <CardanoWallet />
            </Box>
            {/* <Box w="50%" mx="auto" bg="theme.light" color="theme.dark" p="5">
          {connected ? (
            <>{network == 0 ? "Congratulations, your wallet is connected!" : "Time to troubleshoot. There are a few things that could be going on."}</>
            ) : (
              "No wallet is connected. Try to connect one. If it does not work, there a few potential reasons for this. Watch the video above to learn more."
              )}
          </Box> */}
          </AssignmentComponent>
          <SuccessComponent mastery={connected && network == 0}>
            <>
              {network == 0 ? (
                <Text>You are now connected to a Cardano Testnet at the address: {address}</Text>
              ) : (
                <Text>Your wallet is connected to to Preproduction Testnet.</Text>
              )}
            </>
          </SuccessComponent>
        </Box>

        <Divider />
        <Link href="/modules/100/1002">
          <Button my="1em">Continue to Lesson 2</Button>
        </Link>
      </Box>
    </>
  );
}
