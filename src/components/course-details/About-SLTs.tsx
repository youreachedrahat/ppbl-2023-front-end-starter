import { Box, Container, Heading, ListItem, OrderedList, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const AboutSLTs = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue">
        Here is how this course works.
      </Heading>

      <OrderedList margin="1em" marginLeft="3em">
        <ListItem fontSize="xl">PPBL2023 Consists of 14 course Modules</ListItem>

        <ListItem fontSize="xl">Each Module starts with a list of Student Learning Targets (SLTs)</ListItem>
        <ListItem fontSize="xl">
          The lessons in each module are designed to help you master each Student Learning Target.
        </ListItem>
        <ListItem fontSize="xl">You will complete projects to demonstrate mastery of the learning targets.</ListItem>
        <ListItem fontSize="xl">
          We will explore ways to use Cardano and Plutus to represent your mastery status on chain.
        </ListItem>
      </OrderedList>

      <Heading size="2xl" color="theme.blue" marginTop="1em">
        What is a Student Learning Target?
      </Heading>
      <Text fontSize="xl" marginTop="1em">
        A student learning target describes what you will know and be able to do at the end of of Lesson or Module. In
        other words, each SLT should help you understand why each lesson is here.
      </Text>
    </Container>
  );
};

export default AboutSLTs;
