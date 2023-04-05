import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module103.json";
import Docs1032 from "@/src/components/course-modules/103/Docs1032.mdx";

export default function Lesson1032() {
  const slug = "1032";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={103} sltId="103.2" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <Docs1032 />
    </LessonLayout>
  );
}
