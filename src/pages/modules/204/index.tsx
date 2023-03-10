import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const Module204 = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 204);
  return (
    <>
    <Head>
      <title>PPBL Module 204</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/204" selected={0} />
    </div>
    </>
  );
};

export default Module204;
