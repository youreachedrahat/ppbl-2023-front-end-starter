import React from "react";
import { Container, Divider, Heading, Box, Flex, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import Introduction from "@/src/components/course-modules/102/Introduction.mdx";


const SLTs102 = () => {
  return (
    <Container maxWidth={["100%", "90%"]} marginTop="2em">
      <SLTsItems moduleTitle="Module 102" moduleNumber={102} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
      <Flex direction="row">
        <Spacer />
      <Link href="/modules/102/1021">
        <Button my="1em">Get Started</Button>
      </Link>
      </Flex>
    </Container>
  );
};

export default SLTs102;