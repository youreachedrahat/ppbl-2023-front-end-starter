import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module101 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 101);
  return (
    <>
    <Head>
      <title>PPBL Module 100</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/101" selected={0} />
    </div>
    </>
  );
};

export default Module101;
