import SLTsItems from "@/src/components/course-modules/SLTs";
import React from "react";

const SLTs101 = () => {
  const items = [
    { id: "101.1", SLT: "I can compile a plutus validator to Untyped Plutus Core (UPLC)." },
    { id: "101.2", SLT: "I understand the role that UPLC plays in a decentralized application on Cardano." },
    { id: "101.3", SLT: "I can use Demeter.run to compile a .plutus script." },
    { id: "101.4", SLT: "I can set up a local Plutus development environment using nix shell, and use it to compile a .plutus script." },
  ];

  return (
    <SLTsItems module="Module 101" items={items} />
  );
};

export default SLTs101;
