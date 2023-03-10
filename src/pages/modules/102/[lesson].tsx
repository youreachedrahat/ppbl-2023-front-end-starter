import SLTs102 from "@/src/components/course-modules/102/102-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module102Lessons = () => {

  const module = slt.modules.find((m) => m.number === 102);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<SLTs102 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/102" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module102Lessons;