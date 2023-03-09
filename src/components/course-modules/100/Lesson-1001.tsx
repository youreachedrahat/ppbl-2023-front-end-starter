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
import LessonLayout from "../../lms/Lesson/LessonLayout";

export default function Lesson1001() {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();

  return (
    <LessonLayout moduleNumber={100} sltId="100.1">
      <Grid mx="auto" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text fontSize="lg" py="3">
            Usually, when we talk about Cardano, we are talking about the "Cardano Mainnet".
          </Text>
          <Text fontSize="lg" py="3">
            But Mainnet is not the only Cardano network.
          </Text>

          <Text fontSize="lg" py="3">
            We do not want to test new decentralized applications on the Mainnet: if we made a mistake, we could lose
            tokens that have a real value!
          </Text>
          <Text fontSize="lg" py="3">
            That's why in this course we will use Cardano's "pre-production test network" also known as "Preprod".
          </Text>
          <Text fontSize="lg" py="3">
            Your first task in PPBL 2023 is to connect a browser-based wallet to Preprod.
          </Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="9hwa4wEl41k">How to connect your wallet to Pre-Production Testnet:</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

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
        <SuccessComponent mastery={connected && network == 0}>
          <>
            {network == 0 ? (
              <>
                <Text color="theme.green" fontWeight="bold">
                  You are now connected to a Cardano Testnet at the address:
                </Text>
                <Text fontSize="sm" py="2">
                  {address}
                </Text>
              </>
            ) : (
              <Text>Your wallet is connected to to Preproduction Testnet.</Text>
            )}
          </>
        </SuccessComponent>
      </AssignmentComponent>
    </LessonLayout>
  );
}
