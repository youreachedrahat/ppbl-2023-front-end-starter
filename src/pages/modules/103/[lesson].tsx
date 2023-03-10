import SLTs103 from "@/src/components/course-modules/103/103-SLTs";
import ComingSoon from "@/src/components/course-modules/ComingSoon";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"


const Module103Lessons = () => {

  const module = slt.modules.find((m) => m.number === 103);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<><SLTs103 /><ComingSoon /></>},
    { key:"1031", component:<ComingSoon />},
    { key:"1032", component:<ComingSoon />},
    { key:"1033", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/103" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module103Lessons;