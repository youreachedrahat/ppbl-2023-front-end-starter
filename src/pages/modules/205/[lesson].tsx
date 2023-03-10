import SLTs205 from "@/src/components/course-modules/205/205-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module205Lessons = () => {

  const module = slt.modules.find((m) => m.number === 205);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs205 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/205" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module205Lessons;