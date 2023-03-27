import { Container, Divider, Box, Button, Spacer, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Summary from "@/src/components/course-modules/102/Summary.mdx";
import SummaryLayout from "@/src/components/lms/Lesson/SummaryLayout";

const Summary102 = () => {
  return (
    <SummaryLayout nextModule="103">
      <Heading>Module 102 Summary</Heading>
      <Summary />
    </SummaryLayout>
  );
};

export default Summary102;
