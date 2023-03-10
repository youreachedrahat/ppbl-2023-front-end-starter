import SLTs203 from "@/src/components/course-modules/203/203-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module203Lessons = () => {

  const module = slt.modules.find((m) => m.number === 203);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs203 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/203" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module203Lessons;