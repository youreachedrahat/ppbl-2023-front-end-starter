import { Container, Divider, Box, Button, Spacer, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Summary from "@/src/components/course-modules/101/Summary.mdx";
import SummaryLayout from "@/src/components/lms/Lesson/SummaryLayout";

const Summary101 = () => {
  return (
    <SummaryLayout nextModule="102">
      <Heading>Module 101 Summary</Heading>
      <Summary />
    </SummaryLayout>
  );
};

export default Summary101;
