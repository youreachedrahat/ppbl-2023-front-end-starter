import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status101 from "@/src/components/course-modules/101/Status101";
import React from "react";
import SLTs101 from "@/src/components/course-modules/101/101-SLTs";
import Lesson1011 from "@/src/components/course-modules/101/Lesson-1011";
import Lesson1012 from "@/src/components/course-modules/101/Lesson-1012";
import Lesson1013 from "@/src/components/course-modules/101/Lesson-1013";
import Lesson1014 from "@/src/components/course-modules/101/Lesson-1014";
import { default as Example } from "@/src/components/course-modules/101/Example.mdx";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { Grid, GridItem, Text } from "@chakra-ui/react";

import { items } from "@/src/data/modules/101";

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

const Module101Lessons: React.FC<Props> = ({ items, selected }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson)

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      <Status101 />
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/101" selected={itemIndex} />
        <GridItem colSpan={5}>
            {lesson == "example" && <Example />}
            {lesson == "slts" && <SLTs101 />}
            {lesson == "1011" && <Lesson1011 />}
            {lesson == "1012" && <Lesson1012 />}
            {lesson == "1013" && <Lesson1013 />}
            {lesson == "1014" && <Lesson1014 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module101Lessons;
