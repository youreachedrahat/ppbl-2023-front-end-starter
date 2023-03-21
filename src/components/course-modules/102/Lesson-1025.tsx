import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module102.json";
import Docs1025 from "@/src/components/course-modules/102/Docs1025.mdx";

export default function Lesson1025() {
  const slug = "1025";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={102} sltId="102.5" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <Docs1025 />
    </LessonLayout>
  );
}
