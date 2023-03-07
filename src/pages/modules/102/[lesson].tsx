import Sidebar from "@/src/components/ui/Text/Sidebar";
// import Status102 from "@/src/components/course-modules/102/Status102";
import React from "react";
import SLTs102 from "@/src/components/course-modules/102/102-SLTs";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Grid, GridItem } from "@chakra-ui/react";

import { items } from "@/src/data/modules/102";

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

const Module102Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      {/* <Status102 /> */}
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/102" selected={itemIndex} />
        <GridItem colSpan={5}>
            {lesson == "slts" && <SLTs102 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module102Lessons;
