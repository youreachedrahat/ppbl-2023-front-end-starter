import AboutSLTs from "@/src/components/course-details/about-SLTs";
import Governance from "@/src/components/course-details/governance";
import ListOfModules from "@/src/components/course-details/list-of-modules";
import PBLFramework from "@/src/components/course-details/pbl-framework";
import React from "react";
import Sidebar from "@/src/components/ui/Text/sidebar";

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