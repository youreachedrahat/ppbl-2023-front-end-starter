import { Container, Divider, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import ModuleListWithSLTs from "../lms/Course/ModuleListWithSLTs";

const ListOfModules = () => {
  return (
    <Container maxWidth="max" marginLeft="0">
      <Heading size="2xl" color="theme.blue" marginTop="1em">
        Plutus PBL is organized into Modules
      </Heading>
      <Text fontSize="xl" marginTop="1em">
        This is the first module in the course. It is called "Introductions and Getting Started".
      </Text>

      <Divider marginTop="1em" />
      <Heading size="2xl" color="theme.blue" marginTop="1em">
        Here is a list of all Modules in this course:
      </Heading>
      <ModuleListWithSLTs />
    </Container>
  );
};

export default ListOfModules;
