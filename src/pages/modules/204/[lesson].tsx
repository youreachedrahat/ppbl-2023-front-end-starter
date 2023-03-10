import SLTs204 from "@/src/components/course-modules/204/204-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module204Lessons = () => {

  const module = slt.modules.find((m) => m.number === 204);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs204 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/204" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module204Lessons;