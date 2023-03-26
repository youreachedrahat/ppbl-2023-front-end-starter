import SLTs102 from "@/src/components/course-modules/102/102-SLTs";
import Assignment1021 from "@/src/components/course-modules/102/Assignment1021";
import Assignment1022 from "@/src/components/course-modules/102/Assignment1022";
import Lesson1021 from "@/src/components/course-modules/102/Lesson-1021";
import Lesson1022 from "@/src/components/course-modules/102/Lesson-1022";
import Lesson1023 from "@/src/components/course-modules/102/Lesson-1023";
import Lesson1024 from "@/src/components/course-modules/102/Lesson-1024";
import Lesson1025 from "@/src/components/course-modules/102/Lesson-1025";
import Lesson1026 from "@/src/components/course-modules/102/Lesson-1026";
import Summary102 from "@/src/components/course-modules/102/Summary102";

import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import slt from "@/src/data/slts-english.json"


const Module102Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 102);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<SLTs102 />},
    { key:"1021", component:<Lesson1021 />},
    { key:"1022", component:<Lesson1022 />},
    { key:"1023", component:<Lesson1023 />},
    { key:"1024", component:<Lesson1024 />},
    { key:"1025", component:<Lesson1025 />},
    { key:"1026", component:<Lesson1026 />},
    { key:"assignment1021", component:<Assignment1021 />},
    { key:"assignment1022", component:<Assignment1022 />},
    { key:"summary", component:<Summary102 />},

  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/102" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module102Lessons;