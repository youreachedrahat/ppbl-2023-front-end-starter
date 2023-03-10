import React from "react";
import AboutSLTs from "@/src/components/course-details/About-SLTs";
import Governance from "@/src/components/course-details/Governance";
import ListOfModules from "@/src/components/course-details/List-of-modules";
import PBLFramework from "@/src/components/course-details/PBL-framework";
import { items } from "@/src/data/get-started";
import ModuleLessons from "@/src/components/course-modules/Lesson";



const GetStarted = () => {

  const lessons = [
    { key:"framework", component:<PBLFramework />},
    { key:"slts", component:<AboutSLTs />},
    { key:"modules", component:<ListOfModules />},
    { key:"governance", component:<Governance />}
  ]

  return (
    <ModuleLessons items={items} modulePath="/get-started/" selected={0} lessons={lessons} status={null} />
  )
          
};

export default GetStarted;