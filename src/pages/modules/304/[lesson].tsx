import SLTs304 from "@/src/components/course-modules/304/304-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"

const Module304Lessons = () => {

  const module = slt.modules.find((m) => m.number === 304);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs304 />},
  ]

  return (
    <ModuleLessons items={module?.lessons ?? []} modulePath="/modules/304" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module304Lessons;