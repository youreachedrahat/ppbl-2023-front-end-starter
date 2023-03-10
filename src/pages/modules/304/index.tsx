import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module304 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 304);
  return (
    <>
    <Head>
      <title>PPBL Module 304</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/304" selected={0} />
    </div>
    </>
  );
};

export default Module304;
