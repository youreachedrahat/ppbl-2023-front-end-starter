import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";
import YouWillKnowYouAreSuccessfulIf from "@/src/components/lms/Lesson/YouWillKnowYouAreSuccessfulIf";


import Docs1016 from "@/src/components/course-modules/101/Docs1016.mdx";
import module from "./module101.json";

export default function Lesson1016() {
  const slug = "1016";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.6" slug="1016">
      <LessonIntroAndVideo lessonData={lessonDetails} />
      {lessonDetails?.success && (
        <YouWillKnowYouAreSuccessfulIf criteria={lessonDetails?.success?.criteria} text={lessonDetails?.success.text} />
      )}
        <Docs1016 />
    </LessonLayout>
  );
}
