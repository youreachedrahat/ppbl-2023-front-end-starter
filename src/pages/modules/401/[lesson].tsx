import SLTs401 from "@/src/components/course-modules/401/401-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module401Lessons = () => {

  const module = slt.modules.find((m) => m.number === 401);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs401 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/401" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module401Lessons;