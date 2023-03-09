import ContributorPairMintingComponent from "@/src/components/course-modules/100/ContributorMinter/ContributorPairMintingComponent";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Grid, GridItem, Heading, ListItem, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react";
import { Asset } from "@meshsdk/core";
import { useAssets, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import LessonLayout from "../../lms/Lesson/LessonLayout";
import VideoComponent from "../../lms/Lesson/VideoComponent";

export default function Lesson1004() {
  const { connected } = useWallet();
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

  return (
    <LessonLayout moduleNumber={100} sltId="100.4">
      <Grid mx="auto" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text fontSize="lg" py="3">
            Get a Contributor token
          </Text>
          <Text fontSize="lg" py="3">
            It has some superpowers...
          </Text>
          <Text fontSize="lg" py="3">
            ...that you will learn about in this course
          </Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="aaaaa">About Your New Contributor Token</VideoComponent>
        </GridItem>
      </Grid>
      <AssignmentComponent>
        <Text>
          If you have a wallet connected to Cardano Preprod Testnet, you will be able to complete this assignment.
        </Text>
        <Box my="5" p="2" bg="gray.500" color="gray.900">
          {connected ? (
            <>
              {connectedPPBL2023Token != undefined && (
                <>
                  <Heading size="md" py="3">
                    &#127881; Looks like you already have a token &#127881;
                  </Heading>
                  <Text py="3">Congratulations, you demonstrated mastery of this learning target! </Text>
                  <Heading size="md" py="3">
                    &#127959; Up Next: &#127959;
                  </Heading>
                  <UnorderedList>
                    <ListItem>
                      {" "}
                      In this Plutus PBL Course, you will learn how your PPBL2023 token was minted, and how to use
                      tokens to make applications respond differently when different tokens are connected.
                    </ListItem>
                    <ListItem>
                      In Modules 101 and 102, you will learn how to change the lucky number on your new Contributor
                      Token.
                    </ListItem>
                    <ListItem>
                      You will also learn how to hack this web site and mint as many PPBL2023 tokens as you want - but
                      more on that later.
                    </ListItem>
                  </UnorderedList>
                  <Text py="3"></Text>
                  <Text py="3">We are excited to be on this journey with you - let's go!</Text>
                </>
              )}
              {connectedPPBL2023Token == undefined && (
                <>
                  <ContributorPairMintingComponent />
                </>
              )}
            </>
          ) : (
            "make sure to connect a wallet"
          )}
        </Box>
        <SuccessComponent mastery={connected && connectedPPBL2023Token != undefined}>
          <Text py="2">You have a PPBL2023 Token in your connected wallet.</Text>
          <Text py="2">Look in your wallet to see if you have a token with the Policy Id</Text>
          <code>05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056</code>
        </SuccessComponent>
      </AssignmentComponent>
    </LessonLayout>
  );
}
