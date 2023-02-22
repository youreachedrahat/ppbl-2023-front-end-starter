import Status101 from "@/src/components/course-modules/101/Status101";
import React from "react";
import Head from "next/head";

import { default as Example } from "./example.mdx"
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Sidebar from "@/src/components/ui/Text/Sidebar";

const items = [
  {
    name: "Check",
    content:
    <>
      <Box>
        <Example />
        <Heading>Module 101: Compile your first...</Heading>
        <Text>This is a .tsx file</Text>
        <Text><Link href="./101/example">Click here</Link> to see an .mdx file.</Text>
      </Box>
    </>,
  },
];

const Module101 = () => {
  return (
    <>
      <Head>
        <title>PPBL Module 101</title>
      </Head>
      <div>
        <Sidebar items={items} />
      </div>
    </>
  );
};

export default Module101;