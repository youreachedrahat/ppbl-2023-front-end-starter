import SLTs202 from "@/src/components/course-modules/202/202-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module202Lessons = () => {

  const module = slt.modules.find((m) => m.number === 202);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<SLTs202 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/202" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module202Lessons;