import Head from "next/head";
import GetHelp from "@/src/components/lms/Course/GetHelp";
import Hero from "@/src/components/ui/Text/Hero";
import { Box, Center, Divider, Link as CLink } from "@chakra-ui/react";
import LanguageList from "@/src/components/lms/Course/LanguageList";

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
      <LanguageList />
      <Divider w="70%" mx="auto" pb="10" />
      <Box w={["100%", "70%"]} mx="auto" my="10">
        <GetHelp />
      </Box>
      <Divider w="70%" mx="auto" />

      <Center py={["5", "10"]}>
        <CLink
          href="https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023/-/blob/main/LICENSE"
          target="_blank"
        >
          View License
        </CLink>{" "}
      </Center>
    </>
  );
}
