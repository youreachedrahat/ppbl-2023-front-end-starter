import SLTs204 from "@/src/components/course-modules/204/204-SLTs";
import ComingSoon from "@/src/components/course-modules/ComingSoon";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module204Lessons = () => {

  const module = slt.modules.find((m) => m.number === 204);

  const status = null

  const lessons = [
    { key:"slts", component:<><SLTs204 /><ComingSoon /></>},
    { key:"2041", component:<ComingSoon />},
    { key:"2042", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/204" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module204Lessons;