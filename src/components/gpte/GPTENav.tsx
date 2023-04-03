import { useContext, useState } from "react";
import Link from "next/link";
import { Flex, Spacer, Text, Box, Badge } from "@chakra-ui/react";

import { PPBLContext } from "@/src/context/PPBLContext";

const GPTENav = () => {
  const ppblContext = useContext(PPBLContext);

  return (
    <>
      {/* Quick and dirty status bar. Use the concept throughout UI */}
      <Flex direction="row" bg="theme.light" color="theme.dark" pt="1">
        <Spacer />
        <Badge bg="theme.lightGray" color="theme.light">
          {ppblContext.loading ? "Loading" : "Context Ready"}
        </Badge>
        <Spacer />
        <Badge bg="theme.lightGray" color="theme.light">
          {ppblContext.error ? "Errors" : "No Errors"}
        </Badge>
        <Spacer />
        <Badge bg="theme.lightGray" color="theme.light">
          {ppblContext.connectedContribToken ? "Contributor Connected" : "No Connected Contributor"}
        </Badge>
        <Spacer />
        <Badge bg="theme.lightGray" color="theme.light">
          {ppblContext.connectedIssuerToken ? "Issuer Connected" : "No Connnected Issuer"}
        </Badge>
        <Spacer />
        <Badge bg="theme.lightGray" color="theme.light">
          {ppblContext.treasuryUTxO ? "Treasury UTxO Loaded" : "Cannot access Treasury UTxO"}
        </Badge>
        <Spacer />
      </Flex>
      <Flex direction="row" bg="theme.light" color="theme.dark" p="2">
        <Spacer />
        <Text py="2">
          <Link href="/contributors/commit">Commitment Demo</Link>
        </Text>
        <Spacer />
        <Text py="2">
          <Link href="/contributors/distribute">Distribute Demo</Link>
        </Text>
        <Spacer />
      </Flex>
    </>
  );
};

export default GPTENav;
