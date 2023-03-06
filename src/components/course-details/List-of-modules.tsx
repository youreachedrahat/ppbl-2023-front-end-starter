import { Container, Divider, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import ModuleListWithSLTs from "../lms/Course/ModuleListWithSLTs";

const ListOfModules = () => {
  return (
    <Container maxWidth="max" marginLeft="0">
      <Heading size="2xl" color="theme.blue" marginTop="1em">
        Here is a list of all course Modules
      </Heading>
      <ModuleListWithSLTs />
    </Container>
  );
};

export default ListOfModules;
