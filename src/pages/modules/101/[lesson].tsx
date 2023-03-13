import SLTs101 from "@/src/components/course-modules/101/101-SLTs";
import Lesson1011 from "@/src/components/course-modules/101/Lesson-1011";
import Lesson1012 from "@/src/components/course-modules/101/Lesson-1012";
import Lesson1013 from "@/src/components/course-modules/101/Lesson-1013";
import Lesson1014 from "@/src/components/course-modules/101/Lesson-1014";
import Lesson1015 from "@/src/components/course-modules/101/Lesson-1015";
import Status101 from "@/src/components/course-modules/101/Status101";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"

import ComingSoon from "@/src/components/course-modules/ComingSoon";


const Module101Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 101);

  const status = <Status101 />

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<SLTs101 />},
    { key:"1011", component:<Lesson1011 />},
    { key:"1012", component:<Lesson1012 />},
    { key:"1013", component:<Lesson1013 />},
    { key:"1014", component:<Lesson1014 />},
    { key:"1015", component:<Lesson1015 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/101" selected={0} lessons={lessons} status={status} />
  )

};

export default Module101Lessons;