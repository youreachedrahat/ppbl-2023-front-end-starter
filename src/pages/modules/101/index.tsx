import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status101 from "@/src/components/course-modules/101/Status101";
import React from "react";

import Head from "next/head";
import Lesson1011 from "./lesson-1011";
import Lesson1012 from "./lesson-1012";
import Lesson1013 from "./lesson-1013";
import Lesson1014 from "./lesson-1014";
import SLTs101 from "./101-SLTs";

const items = [
  {
    name: "Student Learning Targets",
    content: <SLTs101 />,
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
    content: <><Status101 /> <br/> <Lesson1014 /></>,
  },
];

const Module101 = () => {
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

export default Module101;