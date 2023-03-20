import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Container, Divider, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Introduction from "@/src/components/course-modules/102/Introduction.mdx";


const SLTs102 = () => {
  return (
    <Container maxWidth={["100%", "90%"]} marginTop="2em">
      <SLTsItems moduleTitle="Module 102" moduleNumber={102} />
      <Divider mt="5" />
      <Box py="5">
        <Introduction />
      </Box>
    </Container>
  );
};

export default SLTs102;