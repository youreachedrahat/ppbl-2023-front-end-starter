import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";
import YouWillKnowYouAreSuccessfulIf from "@/src/components/lms/Lesson/YouWillKnowYouAreSuccessfulIf";

import Docs1015 from "@/src/components/course-modules/101/Docs1015.mdx";
import module from "./module101.json";

export default function Lesson1015() {
  const slug = "1015";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.5" slug="1015">
      <LessonIntroAndVideo lessonData={lessonDetails} />
      {lessonDetails?.success && (
        <YouWillKnowYouAreSuccessfulIf criteria={lessonDetails?.success?.criteria} text={lessonDetails?.success.text} />
      )}
        <Docs1015 />
    </LessonLayout>
  );
}
