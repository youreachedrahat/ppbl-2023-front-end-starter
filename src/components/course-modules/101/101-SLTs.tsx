import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Container, Divider, Heading, Box } from "@chakra-ui/react";
import React from "react";

import Introduction from "@/src/components/course-modules/101/Introduction.mdx";


const SLTs101 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <SLTsItems moduleTitle="Module 101" moduleNumber={101} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
    </Container>
  );
};

export default SLTs101;
