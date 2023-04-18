import Head from "next/head";
import { Box, Divider, Link as CLink, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { ContributorComponent } from "@/src/components/ContributorComponent";
import { QueryComponent } from "@/src/components/QueryComponent";
import { CardanoWallet } from "@meshsdk/react";
import Link from "next/link";

export default function Home() {
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
        <Heading pb="5">PPBL 2023 Playground</Heading>
        <Link href="/students/template"><CLink>View /students/template</CLink></Link>
      </Box>

    </>
  );
}
