import SLTs203 from "@/src/components/course-modules/203/203-SLTs";
import ComingSoon from "@/src/components/lms/Lesson/ComingSoon";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import slt from "@/src/data/slts-english.json";

const Module203Lessons = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 203);

  const status = null;

  const lessons = [
    {
      key: "slts",
      component: (
        <>
          <SLTs203 />
          <ComingSoon />
        </>
      ),
    },
    { key: "2031", component: <ComingSoon /> },
    { key: "2032", component: <ComingSoon /> },
    { key: "2033", component: <ComingSoon /> },
    { key: "2034", component: <ComingSoon /> },
  ];

  return (
    <ModuleLessons
      items={moduleSelected?.lessons ?? []}
      modulePath="/modules/203"
      selected={0}
      lessons={lessons}
      status={status}
    />
  );
};

export default Module203Lessons;
