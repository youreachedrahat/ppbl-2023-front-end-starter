import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";
import YouWillKnowYouAreSuccessfulIf from "@/src/components/lms/Lesson/YouWillKnowYouAreSuccessfulIf";

import Docs1014 from "@/src/components/course-modules/101/Docs1014.mdx";
import module from "./module101.json";

export default function Lesson1014() {
  const slug = "1014";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.4" slug="1014">
      <LessonIntroAndVideo lessonData={lessonDetails} />
      {lessonDetails?.success && (
        <YouWillKnowYouAreSuccessfulIf criteria={lessonDetails?.success?.criteria} text={lessonDetails?.success.text} />
      )}
      <Docs1014 />
    </LessonLayout>
  );
}
