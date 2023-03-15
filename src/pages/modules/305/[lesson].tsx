import SLTs305 from "@/src/components/course-modules/305/305-SLTs";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import slt from "@/src/data/slts-english.json"

const Module305Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 305);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs305 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/305" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module305Lessons;