import { Text, Box, Heading } from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";
import YouWillKnowYouAreSuccessfulIf from "@/src/components/lms/Lesson/YouWillKnowYouAreSuccessfulIf";

import module from "./module102.json";
import Docs1025 from "@/src/components/course-modules/102/Docs1025.mdx";

export default function Lesson1025() {
  const slug = "1025";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={102} sltId="102.5" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <AssignmentComponent>
        {lessonDetails?.success && (
          <YouWillKnowYouAreSuccessfulIf
            criteria={lessonDetails?.success?.criteria}
            text={lessonDetails?.success.text}
          />
        )}
        <Docs1025 />
      </AssignmentComponent>
    </LessonLayout>
  );
}
