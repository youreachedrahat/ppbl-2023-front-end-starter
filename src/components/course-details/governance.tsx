import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Governance = () => {
  return (
    <Container maxWidth="max" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue">Beyond Contibution is Goverance</Heading>
      <Text fontSize="xl" marginTop="1em">Our intention is for you be more than a contributor to projects.</Text>
      <Text fontSize="xl" marginTop="1em">We want you to be a decision maker, who helps answer the question:</Text>

      <Heading size="2xl" color="theme.green" marginTop="1em">"What will we do next?"</Heading>
      <Text fontSize="xl" marginTop="1em">We believe that when people are educated, they are better prepared to make decisions. We believe that the best way to get educated is by doing things.</Text>
      <Text fontSize="xl" marginTop="1em">So let's get started.</Text>
    </Container>
  );
};

export default Governance;
