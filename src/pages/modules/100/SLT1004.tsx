import ContributorPairMintingComponent from "@/src/components/ContributorMinter/ContributorPairMintingComponent";
import AssignmentComponent from "@/src/components/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/Lesson/SuccessComponent";
import SLT from "@/src/components/Text/SLT";
import { Box, Heading, ListItem, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react";
import { Asset } from "@meshsdk/core";
import { useAssets, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";

export default function SLT1004() {
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
      <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.light" />}>
        <SLT id="100.4">I can mint a Contributor Token for PPBL</SLT>

        <SuccessComponent mastery={connectedPPBL2023Token != undefined}>
          <Text py="2">You have a PPBL2023 Token in your connected wallet.</Text>
          <Text py="2">Look in your wallet to see if you have a token with the Policy Id</Text>
          <code>05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056</code>
        </SuccessComponent>
        <AssignmentComponent>
          <Text>
            If you have a wallet connected to Cardano Preprod Testnet, you will be able to complete this assignment.
          </Text>
          <Box my="5" p="2" bg="theme.lightGray" color="theme.darkGray">
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
        </AssignmentComponent>
      </Stack>
    );
  }
