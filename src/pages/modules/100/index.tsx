import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-japanese.json"

const Module100 = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 100);

  return (
    <>
    <Head>
      <title>PPBL Module 100</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/100" selected={0} />
    </div>
    </>
  );
};

export default Module100;