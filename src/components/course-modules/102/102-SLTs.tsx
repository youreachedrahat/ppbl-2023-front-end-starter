import React from "react";
import { Divider, Box, Flex, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import Introduction from "@/src/components/course-modules/102/Introduction.mdx";

const SLTs102 = () => {
  return (
    <Box w="95%" marginTop="2em">
      <SLTsItems moduleTitle="Module 102" moduleNumber={102} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
      <Flex direction="row">
        <Spacer />
      <Link href="/modules/102/1021">
        <Button colorScheme="green" my="1em">Get Started</Button>
      </Link>
      <Spacer />
      </Flex>
    </Box>
  );
};

export default SLTs102;