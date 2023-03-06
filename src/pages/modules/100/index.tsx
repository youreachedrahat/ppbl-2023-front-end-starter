import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status100 from "@/src/components/course-modules/100/Status100";
import React from "react";
import SLTs100 from "@/src/components/course-modules/100/100-SLTs";
import Lesson1001 from "@/src/components/course-modules/100/Lesson-1001";
import Lesson1002 from "@/src/components/course-modules/100/Lesson-1002";
import Lesson1003 from "@/src/components/course-modules/100/Lesson-1003";
import Lesson1004 from "@/src/components/course-modules/100/Lesson-1004";
import Head from "next/head";

import { items } from "@/src/data/modules/100";

const Module100 = () => {
  return (
    <>
    <Head>
      <title>PPBL Module 100</title>
    </Head>
    <div>
      <Sidebar items={items} modulePath="/modules/100" selected={0} />
    </div>
    </>
  );
};

export default Module100;