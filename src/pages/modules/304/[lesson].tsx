import Sidebar from "@/src/components/ui/Text/Sidebar";
// import Status304 from "@/src/components/course-modules/304/Status304";
import React from "react";
import SLTs304 from "@/src/components/course-modules/304/304-SLTs";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Grid, GridItem } from "@chakra-ui/react";

import { items } from "@/src/data/modules/304";

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

const Module304Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      {/* <Status304 /> */}
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/304" selected={itemIndex} />
        <GridItem colSpan={5}>
            {lesson == "slts" && <SLTs304 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module304Lessons;
