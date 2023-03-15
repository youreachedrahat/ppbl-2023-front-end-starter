import { Button, Container, Divider, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Governance = () => {
  const textColorBlue = useColorModeValue("theme.darkBlue", "theme.blue");
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color={textColorBlue}>
        Beyond Contribution is Governance
      </Heading>
      <Text marginTop="1em">
        Our long-term intention is for you be <Text as="span" fontWeight="bold" color="theme.green">more than a contributor</Text> to projects.
      </Text>
      <Text marginTop="1em">
        We want you to be a <Text as="span" fontWeight="bold" color="theme.green">decision maker</Text>, who helps answer the question:
      </Text>

      <Heading size="2xl" color={textColorBlue} my="10">
        &rdquo;What will we do next?&rdquo;
      </Heading>
      <Text fontWeight="bold" color="theme.green" my="1em">
        We believe that community education is essential for building great governance systems.
      </Text>
      <Text my="1em">
        We believe that we learn best by doing things.
      </Text>
      <Text my="1em">
        So let&rsquo;s get started.
      </Text>
      <Link href="/modules/100">
        <Button my="10">Get Started with Module 100</Button>
      </Link>
    </Container>
  );
};

export default Governance;
