import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module103.json";
import Docs1033 from "@/src/components/course-modules/103/Docs1033.mdx";

export default function Lesson1033() {
  const slug = "1033";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={103} sltId="103.3" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <Docs1033 />
    </LessonLayout>
  );
}
