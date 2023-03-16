import { Text, Box, Heading } from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module101.json";
import YouWillKnowYouAreSuccessfulIf from "../../lms/Lesson/YouWillKnowYouAreSuccessfulIf";

export default function Lesson1011() {
  const slug = "1011";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.1" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <AssignmentComponent>
        <Text>
          In Module 101, you will not see your Mastery Status on each Lesson. Instead, look for messages like this:
        </Text>
        {lessonDetails?.success && (
          <YouWillKnowYouAreSuccessfulIf
            criteria={lessonDetails?.success?.criteria}
            text={lessonDetails?.success.text}
          />
        )}
      </AssignmentComponent>
    </LessonLayout>
  );
}
