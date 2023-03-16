import { Heading, Text, Box } from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module101.json";
import YouWillKnowYouAreSuccessfulIf from "../../lms/Lesson/YouWillKnowYouAreSuccessfulIf";

export default function Lesson1012() {
  const slug = "1012";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.2" slug="1012">
      <LessonIntroAndVideo lessonData={lessonDetails} />

      {lessonDetails?.success && (
          <YouWillKnowYouAreSuccessfulIf
            criteria={lessonDetails?.success?.criteria}
            text={lessonDetails?.success.text}
          />
        )}
    </LessonLayout>
  );
}
