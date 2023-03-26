import { Container, Divider, Box, Button, Spacer, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Summary from "@/src/components/course-modules/102/Summary.mdx";



const Summary101 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <Heading>Module 102 Summary</Heading>
    
      <Summary />
    </Container>
  );
};

export default Summary101;
