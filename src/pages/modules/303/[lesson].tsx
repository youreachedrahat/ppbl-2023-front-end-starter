import SLTs303 from "@/src/components/course-modules/303/303-SLTs";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
<<<<<<< HEAD
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
=======
>>>>>>> module-101-planning
import slt from "@/src/data/slts-english.json"

const Module303Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 303);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs303 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/303" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module303Lessons;