import SLTs204 from "@/src/components/course-modules/204/204-SLTs";
<<<<<<< HEAD
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
=======
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
>>>>>>> module-101-planning
import slt from "@/src/data/slts-english.json"


const Module204Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 204);

  const status = null

  const lessons = [
    { key:"slts", component:<><SLTs204 /><ComingSoon /></>},
    { key:"2041", component:<ComingSoon />},
    { key:"2042", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/204" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module204Lessons;