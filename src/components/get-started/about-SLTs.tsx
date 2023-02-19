import { Container, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";

const AboutSLTs = () => {
  return (
    <Container maxWidth="max" marginLeft="1em" marginTop="2em">
      <Text>Module 100</Text>
      <Heading size="2xl" color="#4CB5F5">Introductions and Getting Started</Heading>
      <Text fontSize="xl" marginTop="1em">Welcome again to Plutus Project-Based Learning, or PPBL. Here is how this course works.</Text>

        <OrderedList margin="1em" marginLeft="3em">
          <ListItem  fontSize="xl">Each module starts with a list of Student Learning Targets (SLTs)</ListItem>
          <ListItem  fontSize="xl">The lessons in each module are designed to help you master each learning target.</ListItem>
          <ListItem  fontSize="xl">You will complete projects to demonstrate mastery of the learning targets.</ListItem>
          <ListItem  fontSize="xl">You can see your mastery status for each SLT in the top right corner of this page.</ListItem>
        </OrderedList>

      <Heading size="2xl" color="#4CB5F5" marginTop="1em">What is a Student Learning Target?</Heading>
      <Text fontSize="xl" marginTop="1em">A student learning target describes what you will know and be able to do at the end of of Lesson or Module. In other words, each SLT should help you understand why each lesson is here.</Text>
    </Container>
  );
};

export default AboutSLTs;
