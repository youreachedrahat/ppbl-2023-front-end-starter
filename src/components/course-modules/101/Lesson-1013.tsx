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


import Docs1013 from "@/src/components/course-modules/101/Docs1013.mdx";
import module from "./module101.json"

export default function Lesson1013() {
  const slug = "1013"
  const lessonDetails = module.lessons.find(lesson => lesson.slug === slug)

  return (
    <LessonLayout moduleNumber={101} sltId="101.3" slug="1013">
      <LessonIntroAndVideo lessonData={lessonDetails} />

      <AssignmentComponent>
        <Text py="3">
          You will know you are successful if you can see a file called always-succeeds.plutus in your Demeter
          development environment. Take a look at the video above to see what this looks like. Follow along with the
          video or the documentation below.
        </Text>
        <Docs1013 />
      </AssignmentComponent>
    </LessonLayout>
  );
}
