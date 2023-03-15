import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  Link as CLink,
} from "@chakra-ui/react";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";


import module from "./module101.json"


export default function Lesson1012() {
  const slug = "1012"
  const lessonDetails = module.lessons.find(lesson => lesson.slug === slug)

  return (
    <LessonLayout moduleNumber={101} sltId="101.2" slug="1012">
      <LessonIntroAndVideo lessonData={lessonDetails} />

      <AssignmentComponent>
        <Text>
          We will continue our journey toward mastery of SLTs 101.1 and 101.2 throughout this course. At the end of this module, we will have several compiled plutus scripts - we will compare them. In this
          course, you will see how Untyped Plutus Core is one part of a dApp.
        </Text>
      </AssignmentComponent>
    </LessonLayout>
  );
}
