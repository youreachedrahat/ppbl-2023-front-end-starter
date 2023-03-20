import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Container, Divider, Box, Button, Spacer, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Introduction from "@/src/components/course-modules/101/Introduction.mdx";

const SLTs101 = () => {
  return (
    <Container maxWidth={["100%", "90%"]} marginTop="2em">
      <SLTsItems moduleTitle="Module 101" moduleNumber={101} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
      <Flex direction="row">
        <Spacer />
      <Link href="/modules/101/1011">
        <Button my="1em">Get Started</Button>
      </Link>
      </Flex>
    </Container>
  );
};

export default SLTs101;
