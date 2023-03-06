import AboutSLTs from "@/src/components/course-details/About-SLTs";
import Governance from "@/src/components/course-details/Governance";
import ListOfModules from "@/src/components/course-details/List-of-modules";
import PBLFramework from "@/src/components/course-details/PBL-framework";
import React from "react";
import Sidebar from "@/src/components/ui/Text/Sidebar";
import Head from "next/head";

const items = [
  {
    slug: "framework",
    name: "PBL Framework",
  },
  {
    slug: "slts",
    name: "About Student Learning Targets",
  },
  {
    slug: "modules",
    name: "List of Course Modules",
  },
  {
    slug: "governance",
    name: "Governance",
  },
];

const GetStarted = () => {
  return (
    <>
    <Head>
      <title>Get Started</title>
    </Head>
    <div>
      <Sidebar items={items} modulePath="/get-started" selected={0} />
    </div>
    </>
  );
};

export default GetStarted;