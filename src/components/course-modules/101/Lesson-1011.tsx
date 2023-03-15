import { Text } from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import module from "./module101.json";

export default function Lesson1011() {
  const slug = "1011";
  const lessonDetails = module.lessons.find((lesson) => lesson.slug === slug);

  return (
    <LessonLayout moduleNumber={101} sltId="101.1" slug={slug}>
      <LessonIntroAndVideo lessonData={lessonDetails} />
      <AssignmentComponent>
        <Text>
          In this Module, you will not see a Mastery Status on each Lesson. Instead, look for where it says &rdquo;You
          will know you are successful if...&rdquo;
        </Text>
        <Text>
          SLT 101.1 is a &rdquo;big picture&rdquo; learning target. This means that you can always improve, but you
          might never be done -- there will always be something new to learn about plutus validators!
        </Text>
      </AssignmentComponent>
    </LessonLayout>
  );
}
