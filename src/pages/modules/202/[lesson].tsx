import SLTs202 from "@/src/components/course-modules/202/202-SLTs";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import slt from "@/src/data/slts-english.json"


const Module202Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 202);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<><SLTs202 /><ComingSoon /></>},
    { key:"2021", component:<ComingSoon />},
    { key:"2022", component:<ComingSoon />},
    { key:"2023", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/202" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module202Lessons;