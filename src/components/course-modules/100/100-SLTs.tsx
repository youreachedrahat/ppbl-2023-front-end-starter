import SLTsItems from "@/src/components/course-modules/SLTs";
import { Container, Divider, Heading, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SLTs100 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <SLTsItems moduleTitle="Module 100" moduleNumber={100} />
      <Divider mt="5" />
      <Heading py="3">Welcome to Plutus PBL 2023!</Heading>
      <Text py="3" fontSize="lg">
        The purpose of this module is to give you an example of how this course works. There are a few things we'd like
        to point out.
      </Text>
      <Text py="3" fontSize="lg">
        First, please note that every Module in PPBL starts with a list of Student Learning Targets (SLTs). In this
        module, you will start to see some different ways to think about "Mastery" of each SLT.
      </Text>
      <Text py="3" fontSize="lg">
        Notice also that at the top of the page there is a status bar that corresponds to these learning targets. You
        will see how this works in Lesson 1.
      </Text>
      <Text py="3" fontSize="lg">
        We will continue to show you around in the next few lessons. For now, use the sidebar to navigate to Lesson 1,
        or tap the button below.
      </Text>
      <Link href="/modules/100/1001">
        <Button my="1em">I am ready for Lesson 1!</Button>
      </Link>
    </Container>
  );
};

export default SLTs100;
