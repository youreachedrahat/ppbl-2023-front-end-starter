import SLTs401 from "@/src/components/course-modules/401/401-SLTs";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon"
import slt from "@/src/data/slts-english.json"


const Module401Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 401);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs401 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/401" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module401Lessons;