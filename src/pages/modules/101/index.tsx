import Status101 from "@/src/components/course-modules/101/Status101";
import React from "react";
import Head from "next/head";

import { default as Example } from "./example.mdx"
import { default as Introduction } from "./introduction.mdx"
import Sidebar from "@/src/components/ui/Text/Sidebar";
import Module101 from "./intro";
import Lesson1012 from "./lesson-1012";
import Lesson1011 from "./lesson-1011";
import Lesson1004 from "../100/lesson-1004";
import Lesson1013 from "./lesson-1013";

const items = [
  {
    name: "Check",
    content: <> <Example /> <Module101 /> </>,
  },
  {
    name: "Introduction",
    content: <> <Status101 /> <Introduction /> </>,
  },
  {
    name: "Lesson 1",
    content: <><Status101 /> <br/> <Lesson1011 /></>,
  },
  {
    name: "Lesson 2",
    content: <><Status101 /> <br/> <Lesson1012 /></>,
  },
  {
    name: "Lesson 3",
    content: <><Status101 /> <br/> <Lesson1013 /></>,
  },
  {
    name: "Lesson 4",
    content: <><Status101 /> <br/> <Lesson1004 /></>,
  },
];

const HomeModule101 = () => {
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

export default HomeModule101;