import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status100 from "@/src/components/course-modules/100/Status100";
import React from "react";
import SLTs100 from "@/src/components/course-modules/100/100-SLTs";
import Lesson1001 from "@/src/components/course-modules/100/Lesson-1001";
import Lesson1002 from "@/src/components/course-modules/100/Lesson-1002";
import Lesson1003 from "@/src/components/course-modules/100/Lesson-1003";
import Lesson1004 from "@/src/components/course-modules/100/Lesson-1004";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { Grid, GridItem, Text } from "@chakra-ui/react";

import { items } from "@/src/data/modules/100";

const selected = 0;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { lesson: items[0].slug } },
      { params: { lesson: items[1].slug } },
      { params: { lesson: items[2].slug } },
      { params: { lesson: items[3].slug } },
      { params: { lesson: items[4].slug } },
    ],
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

const Module100Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      <Status100 />
      <Grid templateRows="repeat(10, 1fr)" templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/100" selected={itemIndex} />
        <GridItem colSpan={5}>
           {lesson == "slts" && <SLTs100 />}
           {lesson == "1001" && <Lesson1001 />}
           {lesson == "1002" && <Lesson1002 />}
           {lesson == "1003" && <Lesson1003 />}
           {lesson == "1004" && <Lesson1004 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module100Lessons;
