import SLTsItems from "@/src/components/course-modules/SLTs";
import React from "react";

const SLTs100 = () => {
  const items = [
    { id: "100.1", SLT: "I can connect a Cardano wallet to the pre-production test network" },
    { id: "100.2", SLT: "I can get free tAda on the pre-production testnet" },
    { id: "100.3", SLT: "I know how to safely store my keys" },
    { id: "100.4", SLT: "I can mint a Contributor Token for PPBL" },
  ];

  return (
    <SLTsItems module="Module 100" items={items} />
  );
};

export default SLTs100;

