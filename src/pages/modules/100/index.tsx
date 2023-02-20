import Sidebar from "@/src/components/sidebar";
import Status100 from "@/src/components/Status/module100";
import React from "react";
import SLTs100 from "./100-SLTs";
import SLT1001 from "./SLT1001";
import SLT1002 from "./SLT1002";
import SLT1003 from "./SLT1003";
import SLT1004 from "./SLT1004";



const items = [
  {
    name: "Student Learning Targets",
    content: <SLTs100 />,
  },
  {
    name: "Lesson 1",
    content: <><Status100 /> <br/> <SLT1001 /></>,
  },
  {
    name: "Lesson 2",
    content: <><Status100 /> <br/> <SLT1002 /></>,
  },
  {
    name: "Lesson 3",
    content: <><Status100 /> <br/> <SLT1003 /></>,
  },
  {
    name: "Lesson 4",
    content: <><Status100 /> <br/> <SLT1004 /></>,
  },
];
    
const Module100 = () => {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
};
    
export default Module100;