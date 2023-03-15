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
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import LessonLayout from "@/src/components/lms/Lesson/LessonLayout";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import LessonIntroAndVideo from "@/src/components/lms/Lesson/LessonIntroAndVideo";

import Docs1014 from "@/src/components/course-modules/101/Docs1014.mdx"
import module from "./module101.json"


export default function Lesson1014() {
  const slug = "1014"
  const lessonDetails = module.lessons.find(lesson => lesson.slug === slug)

  return (
    <LessonLayout moduleNumber={101} sltId="101.4" slug="1014">
      <LessonIntroAndVideo lessonData={lessonDetails} />


      <AssignmentComponent>
        <Docs1014 />
      </AssignmentComponent>
    </LessonLayout>
  );
}