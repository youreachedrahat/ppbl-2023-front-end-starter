import SLTs301 from "@/src/components/course-modules/301/301-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"

const Module301Lessons = () => {

  const module = slt.modules.find((m) => m.number === 301);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs301 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/301" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module301Lessons;