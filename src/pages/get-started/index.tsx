import AboutSLTs from "@/src/components/course-details/About-SLTs";
import Governance from "@/src/components/course-details/Governance";
import ListOfModules from "@/src/components/course-details/List-of-modules";
import PBLFramework from "@/src/components/course-details/PBL-framework";
import React from "react";
import Sidebar from "@/src/components/ui/Text/Sidebar";

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