import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Divider, Box, Button, Spacer, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Introduction from "@/src/components/course-modules/101/Introduction.mdx";

const SLTs101 = () => {
  return (
    <Box w="95%" marginTop="2em">
      <SLTsItems moduleTitle="Module 101" moduleNumber={101} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
      <Flex direction="row">
        <Spacer />
      <Link href="/modules/101/1011">
        <Button colorScheme="green" my="1em">Get Started</Button>
      </Link>
      <Spacer />
      </Flex>
    </Box>
  );
};

export default SLTs101;
