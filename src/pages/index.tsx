import Head from "next/head";
import GetHelp from "@/src/components/lms/Course/GetHelp";
import Hero from "@/src/components/ui/Text/Hero";
import { Box, Divider } from "@chakra-ui/react";
import SocialLinks from "../components/lms/Course/SocialLinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>PPBL 2023</title>
        <meta name="description" content="Plutus Project-Based Learning from Gimbalabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Divider w="50%" mx="auto" />
      <Box w="70%" mx="auto" my="10">
        <GetHelp />
      </Box>
    </>
  );
}
