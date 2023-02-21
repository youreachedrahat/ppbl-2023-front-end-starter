import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status100 from "@/src/components/course-modules/100/Status100";
import React from "react";
import SLTs100 from "./100-SLTs";
import Lesson1001 from "./lesson-1001";
import Lesson1002 from "./lesson-1002";
import Lesson1003 from "./lesson-1003";
import Lesson1004 from "./lesson-1004";
import Head from "next/head";

const items = [
  {
    name: "Student Learning Targets",
    content: <SLTs100 />,
  },
  {
    name: "Lesson 1",
    content: <><Status100 /> <br/> <Lesson1001 /></>,
  },
  {
    name: "Lesson 2",
    content: <><Status100 /> <br/> <Lesson1002 /></>,
  },
  {
    name: "Lesson 3",
    content: <><Status100 /> <br/> <Lesson1003 /></>,
  },
  {
    name: "Lesson 4",
    content: <><Status100 /> <br/> <Lesson1004 /></>,
  },
];

const Module100 = () => {
  return (
    <>
    <Head>
      <title>PPBL Module 100</title>
    </Head>
    <div>
      <Sidebar items={items} />
    </div>
    </>
  );
};

export default Module100;