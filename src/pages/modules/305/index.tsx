import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module305 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 305);
  return (
    <>
    <Head>
      <title>PPBL Module 305</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/305" selected={0} />
    </div>
    </>
  );
};

export default Module305;
