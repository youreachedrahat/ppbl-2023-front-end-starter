import { Button, Container, Divider, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ModuleListWithSLTs from "../lms/Course/ModuleListWithSLTs";

const ListOfModules = () => {
  return (
    <Container maxWidth="80%" marginLeft="0">
      <Heading size="2xl" color="theme.blue" my="1em">
        Plutus PBL Course Outline
      </Heading>
      <Text fontSize="xl" pb="5">
        Each Module has a number. The Student Learning Targets (SLTs) in each Module are also numbered. The purpose of
        this numbering system is to give all of us a quick way to reference what you are learning.
      </Text>
      <Text fontSize="xl" pb="5">
        When you get stuck, you can start by saying, "I need help with SLT 102.3", which is a quick indication that you
        are learning to build transactions using cardano-cli. For an overview of what you will learn in PPBL 2023, take
        a look at the SLTs below.
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="theme.yellow" pb="5">
        Click on a Module to view Student Learning Targets.
      </Text>
      <ModuleListWithSLTs />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Next:
      </Heading>
      <Text fontSize="xl" my="5">
        All of our work leads toward Governance.
      </Text>
      <Link href="/get-started/governance">
        <Button>How does PPBL connect to Governance?</Button>
      </Link>
      <Divider my="2em" />
    </Container>
  );
};

export default ListOfModules;
