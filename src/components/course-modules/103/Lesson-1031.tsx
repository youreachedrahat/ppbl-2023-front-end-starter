import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module103.json";
import Docs1031 from "@/src/components/course-modules/103/Docs1031.mdx";


export default function Lesson1031() {
  const slug = "1031";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={103} sltId="103.1" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <Docs1031 />
    </LessonLayout>
  );
}
