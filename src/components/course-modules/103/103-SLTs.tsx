import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Divider, Box, Flex, Button, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Introduction from "@/src/components/course-modules/103/Introduction.mdx";

const SLTs103 = () => {
  return (
    <Box w="95%" marginTop="2em">
      <SLTsItems moduleTitle="Module 103" moduleNumber={103} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
      <Flex direction="row">
        <Spacer />
      <Link href="/modules/103/1031">
        <Button colorScheme="green" my="1em">Get Started</Button>
      </Link>
      <Spacer />
      </Flex>
    </Box>
  );
};

export default SLTs103;
