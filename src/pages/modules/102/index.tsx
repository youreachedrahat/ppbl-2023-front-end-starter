import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module102 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 102);
  return (
    <>
    <Head>
      <title>PPBL Module 102</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/102" selected={0} />
    </div>
    </>
  );
};

export default Module102;
