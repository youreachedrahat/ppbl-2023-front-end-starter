import Head from "next/head";
import {
  Box,
  Divider,
  Link as CLink,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  FormHelperText,
} from "@chakra-ui/react";

import { CardanoWallet } from "@meshsdk/react";

export default function Minting() {

  return (
    <>
      <Head>
        <title>PPBL 202 Minting tokens</title>
        <meta
          name="description"
          content="Plutus Project-Based Learning from Gimbalabs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Divider w="70%" mx="auto" pb="10" />
      <Box w={["100%", "70%"]} mx="auto" my="10">
        <Heading>PPBL 202 Minting tokens</Heading>
        <Text py="5" fontSize="xl">
          Welcome to the module 202! In this page, you can create the code for
          miting with MeshJS.
        </Text>
        <Text py="5" fontSize="xl">
          If you would like build this starter on your own,{" "}
          <CLink
            href="https://gitlab.com/gimbalabs/ppbl-2023/ppbl-2023-front-end-starter/-/blob/main/docs/how-to-build.md"
            target="_blank"
          >
            an outline is provided here
          </CLink>
          .
        </Text>
        <Text pt="5" fontSize="xl">
          Now that you have it running, you can use this starter to complete the
          rest of the lessons in Module 202.
        </Text>
      </Box>
      <Divider w="70%" mx="auto" />
      <Box
        w={{ base: "100%", md: "90%", lg: "70%" }}
        mx="auto"
        my="5"
        p="5"
        border="1px"
        borderRadius="md"
        h="60"
      >
        <Heading size="md" pb="3">
          Connect your wallet
        </Heading>
        <Flex>
          <CardanoWallet />
        </Flex>
      </Box>
      <Box
        w={{ base: "100%", md: "90%", lg: "70%" }}
        mx="auto"
        my="5"
        p="5"
        border="1px"
        borderRadius="md"
      >
        <Heading size="md" pb="3">
          Lesson 202.2: Minting a token using Mesh
        </Heading>
        {/* Start coding here*/}
      </Box>
      <Box
        w={{ base: "100%", md: "90%", lg: "70%" }}
        mx="auto"
        my="5"
        p="5"
        border="1px"
        borderRadius="md"
      >
        <Heading size="md" pb="3">
          Keep Exploring
        </Heading>
        <UnorderedList>
          <ListItem py="1" ml="5">
            <CLink
              href="https://nextjs.org/docs/basic-features/pages"
              target="_blank"
            >
              Learn about Pages in Next.js
            </CLink>
            . Add a new page to this project.
          </ListItem>
          <ListItem py="1" ml="5">
            <CLink
              href="https://chakra-ui.com/docs/styled-system/customize-theme"
              target="_blank"
            >
              Customize the theme
            </CLink>{" "}
            in _app.tsx. For example, try to change the colors for theme.dark
            and theme.light.
          </ListItem>
          <ListItem py="1" ml="5">
            Read the{" "}
            <CLink href="https://meshjs.dev/" target="_blank">
              Mesh documentation
            </CLink>
            . What do you want to build next?
          </ListItem>
        </UnorderedList>
        <Text pt="3">
          These are just a few suggestions. We will continue to build front-end
          components in Modules 203 through 204.
        </Text>
      </Box>
    </>
  );
}
