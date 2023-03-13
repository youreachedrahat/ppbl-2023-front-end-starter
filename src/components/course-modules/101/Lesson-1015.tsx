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

export default function Lesson1015() {
  return (
    <LessonLayout moduleNumber={101} sltId="101.5" slug="1015">
      <Grid mx="auto" fontSize="lg" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text py="3">Write details about the lesson here</Text>
          <Text py="3">Write details about the lesson here</Text>
          <Text>Share some links, reference the video</Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="">VIDEO DESCRIPTION</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

      <AssignmentComponent>
        <Text>Replace with documentation - import from MDX</Text>
        <SuccessComponent mastery={false}></SuccessComponent>
      </AssignmentComponent>
    </LessonLayout>
  );
}