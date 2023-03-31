import { Container, Divider, Box, Button, Spacer, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import Summary from "@/src/components/course-modules/103/Summary.mdx";
import SummaryLayout from "@/src/components/lms/Lesson/SummaryLayout";

const Summary103 = () => {
  return (
    <SummaryLayout nextModule="201">
      <Heading>Module 103 Summary</Heading>
      <Summary />
    </SummaryLayout>
  );
};

export default Summary103;
