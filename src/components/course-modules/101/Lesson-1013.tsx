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

import Docs1013 from "@/src/components/course-modules/101/Docs1013.mdx";

export default function Lesson1013() {
  return (
    <LessonLayout moduleNumber={101} sltId="101.3" slug="1013">
      <Grid mx="auto" fontSize="lg" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text py="3">What is demeter.run</Text>
          <Text py="3">Why demeter.run is helpful</Text>
          <Text py="3">What you need</Text>
          <Text py="3">Give it a try - see video</Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="">VIDEO DESCRIPTION</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

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
