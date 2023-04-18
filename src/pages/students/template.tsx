import Head from "next/head";
import { Box, Divider, Link as CLink, Heading, Text } from "@chakra-ui/react";
import { CardanoWallet } from "@meshsdk/react";
import { ContributorComponent } from "@/src/components/ContributorComponent";
import { QueryComponent } from "@/src/components/QueryComponent";

export default function StudentTemplate() {
  return (
    <>
      <Head>
        <title>PPBL 2023 Playground</title>
        <meta name="description" content="Plutus Project-Based Learning from Gimbalabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Divider w="70%" mx="auto" pb="10" />
      <Box w={["100%", "70%"]} mx="auto" my="10">
        <Heading>What do you want to build?</Heading>
        <Box mx="auto" my="5" p="5" border="1px" borderRadius="md">
          <Heading size="md" pb="3">
            Checking your PPBL 2023 Contributor Token:
          </Heading>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <CardanoWallet />
          </div>
          <ContributorComponent />
          <QueryComponent />
        </Box>
      </Box>
    </>
  );
}
