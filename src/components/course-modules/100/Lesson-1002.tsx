import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import SLT from "@/src/components/ui/Text/SLT";
import {
  Box,
  Grid,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
  Link as ChakraLink,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { CardanoWallet, useAddress, useLovelace, useNetwork, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import LessonLayout from "../../lms/Lesson/LessonLayout";

export default function Lesson1002() {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();
  const lovelace = useLovelace();

  const [mastery, setMastery] = useState(false);

  useEffect(() => {
    if (network == 0 && lovelace && parseInt(lovelace) > 0) {
      setMastery(true);
    }
  }, [connected, network, lovelace]);

  return (
    <LessonLayout moduleNumber={100} sltId="100.2">
      <Grid mx="auto" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text fontSize="lg" py="3">
            Get free ada!
          </Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="aaaaa">How to get tAda from the Preprod Faucet</VideoComponent>
        </GridItem>
      </Grid>

      <AssignmentComponent>
        <OrderedList pb="5">
          <ListItem>
            Go to{" "}
            <ChakraLink href="https://docs.cardano.org/cardano-testnet/tools/faucet">
              https://docs.cardano.org/cardano-testnet/tools/faucet
            </ChakraLink>
          </ListItem>
          <ListItem>Make sure to select Preprod Testnet from the Environment menu.</ListItem>
          <ListItem>Enter your preproduction address and submit the form.</ListItem>
          <ListItem>Congrats, now you are rich with tAda!</ListItem>
        </OrderedList>
        <SuccessComponent mastery={connected && mastery}>You have test ada in your wallet.</SuccessComponent>
      </AssignmentComponent>
      <Link href="/modules/100/1003">
        <Button my="1em">Continue to Lesson 3</Button>
      </Link>
    </LessonLayout>
  );
}
