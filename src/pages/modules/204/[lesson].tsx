import Sidebar from "@/src/components/ui/Text/Sidebar";
// import Status204 from "@/src/components/course-modules/204/Status204";
import React from "react";
import SLTs204 from "@/src/components/course-modules/204/204-SLTs";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Grid, GridItem } from "@chakra-ui/react";

import { items } from "@/src/data/modules/204";

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

const Module204Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      {/* <Status204 /> */}
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/204" selected={itemIndex} />
        <GridItem colSpan={5}>
            {lesson == "slts" && <SLTs204 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module204Lessons;
