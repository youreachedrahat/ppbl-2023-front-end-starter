import Sidebar from "@/src/components/ui/Text/Sidebar";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Divider, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

type Item = {
  slug: string;
  name: string;
};

type Props = {
  items: Item[];
  modulePath: string;
  selected: number;
  lessons: any[];
  status: any;
};

const ModuleLessons = ({ items, modulePath, selected, lessons, status }: Props) => {
  const [itemIndex, setItemIndex] = useState(selected);
  const router = useRouter();
  const lesson = router.query.lesson?.toString();
  const showStatus = useBreakpointValue({ base: false, md: true });


  useEffect(() => {
    const index = lesson ? items.findIndex((item: Item) => item.slug === lesson) : 0;
    setItemIndex(index);
  }, [lesson, items, modulePath, router, selected]);

  const component = lessons.find((item) => item.key === lesson)?.component;

  return (
    <>
      <Head>
        <title>PPBL</title>
      </Head>
      {showStatus && status}
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath={modulePath} selected={itemIndex} />
        <GridItem colSpan={5} mb="2em">
          {component && component}
        </GridItem>
      </Grid>
    </>
  );
};

export default ModuleLessons;
