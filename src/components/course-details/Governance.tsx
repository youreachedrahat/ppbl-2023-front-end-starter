import { Button, Container, Divider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Governance = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue" my="10">
        Beyond Contibution is Goverance
      </Heading>
      <Text fontSize="xl" marginTop="1em">
        Our long-term intention is for you be <Text as="span" fontWeight="bold" color="theme.green">more than a contributor</Text> to projects.
      </Text>
      <Text fontSize="xl" marginTop="1em">
        We want you to be a <Text as="span" fontWeight="bold" color="theme.green">decision maker</Text>, who helps answer the question:
      </Text>

      <Heading size="2xl" color="theme.blue" my="10">
        &rdquo;What will we do next?&rdquo;
      </Heading>
      <Text fontSize="xl" fontWeight="bold" color="theme.green" my="1em">
        We believe that community education is essential for building great governance systems.
      </Text>
      <Text fontSize="xl" my="1em">
        We believe that we learn best by doing things.
      </Text>
      <Text fontSize="xl" my="1em">
        So let&rsquo;s get started.
      </Text>
      <Link href="/modules/100">
        <Button my="10">Get Started with Module 100</Button>
      </Link>
    </Container>
  );
};

export default Governance;
