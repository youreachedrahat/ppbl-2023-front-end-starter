import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status100 from "@/src/components/course-modules/100/Status100";
import React from "react";
import { default as Example } from "@/src/components/course-modules/101/Example.mdx";
import Head from "next/head";

import { items } from "@/src/data/modules/100";

import { Grid, GridItem } from "@chakra-ui/react";

const Module101 = () => {
  return (
    <>
      <Head>
        <title>PPBL Module 101</title>
      </Head>
      <Grid templateRows="repeat(10, 1fr)" templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/101" selected={0} />
        <GridItem colSpan={5}>
          <Example />
        </GridItem>
      </Grid>
    </>
  );
};

export default Module101;
