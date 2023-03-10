import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module103 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 103);
  return (
    <>
    <Head>
      <title>PPBL Module 103</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/103" selected={0} />
    </div>
    </>
  );
};

export default Module103;
