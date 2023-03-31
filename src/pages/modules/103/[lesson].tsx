import SLTs103 from "@/src/components/course-modules/103/103-SLTs";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import slt from "@/src/data/slts-english.json"
import Lesson1031 from "@/src/components/course-modules/103/Lesson-1031";
import Lesson1032 from "@/src/components/course-modules/103/Lesson-1032";
import Lesson1033 from "@/src/components/course-modules/103/Lesson-1033";
import Summary103 from "@/src/components/course-modules/103/Summary103";
import Commit103 from "@/src/components/course-modules/103/Commit103";


const Module103Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 103);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<><SLTs103 /></>},
    { key:"1031", component:<Lesson1031 />},
    { key:"1032", component:<Lesson1032 />},
    { key:"1033", component:<Lesson1033 />},
    { key:"summary", component:<Summary103 />},
    { key:"commit", component:<Commit103 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/103" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module103Lessons;