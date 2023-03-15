import SLTs304 from "@/src/components/course-modules/304/304-SLTs";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import slt from "@/src/data/slts-english.json"

const Module304Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 304);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs304 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/304" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module304Lessons;