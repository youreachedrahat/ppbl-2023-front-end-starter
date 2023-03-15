import SLTs205 from "@/src/components/course-modules/205/205-SLTs";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import slt from "@/src/data/slts-english.json"


const Module205Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 205);

  const status = null

  const lessons = [
    { key:"slts", component:<><SLTs205 /><ComingSoon /></>},
    { key:"2051", component:<ComingSoon />},
    { key:"2052", component:<ComingSoon />},
    { key:"2053", component:<ComingSoon />},
    { key:"2054", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/205" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module205Lessons;