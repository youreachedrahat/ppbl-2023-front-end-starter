import AboutSLTs from "@/components/get-started/about-SLTs";
import Governance from "@/components/get-started/governance";
import ListOfModules from "@/components/get-started/list-of-modules";
import PBLFramework from "@/components/get-started/pbl-framework";
import React from "react";
import Sidebar from "./sidebar";

const items = [
  {
    name: "List of Modules",
    content: <ListOfModules />,
  },
  {
    name: "PBL Framework",
    content: <PBLFramework />,
  },
  {
    name: "Governance",
    content: <Governance />,
  },
  {
    name: "About SLTs",
    content: <AboutSLTs />,
  },
];
    
const App = () => {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
};
    
export default App;