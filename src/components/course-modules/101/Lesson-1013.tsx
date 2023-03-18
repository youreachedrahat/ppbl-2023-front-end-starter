import { Text, Box, Heading } from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import Docs1013 from "@/src/components/course-modules/101/Docs1013.mdx";
import module from "./module101.json";
import YouWillKnowYouAreSuccessfulIf from "../../lms/Lesson/YouWillKnowYouAreSuccessfulIf";

export default function Lesson1013() {
  const slug = "1013";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.3" slug="1013">
      <LessonIntroAndVideo lessonData={lessonDetails} />
      {lessonDetails?.success && (
          <YouWillKnowYouAreSuccessfulIf
            criteria={lessonDetails?.success?.criteria}
            text={lessonDetails?.success.text}
          />
        )}
      <Docs1013 />
    </LessonLayout>
  );
}
