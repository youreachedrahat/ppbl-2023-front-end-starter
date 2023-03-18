import SLTs201 from "@/src/components/course-modules/201/201-SLTs";
<<<<<<< HEAD
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
=======
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
>>>>>>> module-101-planning
import slt from "@/src/data/slts-english.json"

const Module201Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 201);

  const status = null

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key:"slts", component:<><SLTs201 /><ComingSoon /></>},
    { key:"2011", component:<ComingSoon />},
    { key:"2012", component:<ComingSoon />},
    { key:"2013", component:<ComingSoon />},
    { key:"2014", component:<ComingSoon />},
    { key:"2015", component:<ComingSoon />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/201" selected={0} lessons={lessons} status={status}/>
  )

};

export default Module201Lessons;