import Sidebar from "@/src/components/ui/Text/Sidebar";
// import Status103 from "@/src/components/course-modules/103/Status103";
import React from "react";
import SLTs103 from "@/src/components/course-modules/103/103-SLTs";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Grid, GridItem } from "@chakra-ui/react";

import { items } from "@/src/data/modules/103";

const selected = 0;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = items.map((item) => ({ params: { lesson: item.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { items, selected },
  };
};

type Props = {
  items: any;
  selected: number;
};

const Module103Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      {/* <Status103 /> */}
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/103" selected={itemIndex} />
        <GridItem colSpan={5}>
            {lesson == "slts" && <SLTs103 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module103Lessons;
