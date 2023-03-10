import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module202 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 202);
  return (
    <>
    <Head>
      <title>PPBL Module 202</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/202" selected={0} />
    </div>
    </>
  );
};

export default Module202;
