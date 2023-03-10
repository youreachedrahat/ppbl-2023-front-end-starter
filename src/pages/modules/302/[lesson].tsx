import SLTs302 from "@/src/components/course-modules/302/302-SLTs";
import ModuleLessons from "@/src/components/course-modules/Lesson";
import slt from "@/src/data/slts-english.json"

const Module302Lessons = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 302);

  const status = null

  const lessons = [
    { key:"slts", component:<SLTs302 />},
  ]

  return (
    <ModuleLessons items={moduleSelected?.lessons ?? []} modulePath="/modules/302" selected={0} lessons={lessons} status={status}/>
  )
          
};

export default Module302Lessons;