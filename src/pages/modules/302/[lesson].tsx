import Sidebar from "@/src/components/ui/Text/Sidebar";
// import Status302 from "@/src/components/course-modules/302/Status302";
import React from "react";
import SLTs302 from "@/src/components/course-modules/302/302-SLTs";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Grid, GridItem } from "@chakra-ui/react";

import { items } from "@/src/data/modules/302";

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

const Module302Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      {/* <Status302 /> */}
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/302" selected={itemIndex} />
        <GridItem colSpan={5}>
            {lesson == "slts" && <SLTs302 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module302Lessons;
