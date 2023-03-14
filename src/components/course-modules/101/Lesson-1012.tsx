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
import Example from "@/src/components/course-modules/101/Example.mdx";

export default function Lesson1012() {
  return (
    <LessonLayout moduleNumber={101} sltId="101.2" slug="1012">
      <Grid mx="auto" fontSize="lg" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text py="3">So UPLC can be compiled from many different sources.</Text>
          <Text py="3">Once it is compiled, UPLC can be represented as bytecode.</Text>
          <Text py="3">
            Then, this bytecode can be used in decentralized applications. In Module 102 we will start to build
            transactions using compiled Plutus Scripts. In Module 201, we will start to use the scripts in a
            javascript-based front-end.
          </Text>
          <Text py="3">How to use it...that will be for the rest of our course!</Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="">VIDEO DESCRIPTION</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

      <AssignmentComponent>
        <Text>
          We will continue our journey toward mastery of SLTs 101.1 and 101.2 throughout this course. At the end of this module, we will have several compiled plutus scripts - we will compare them. In this
          course, you will see how Untyped Plutus Core is one part of a dApp.
        </Text>
      </AssignmentComponent>
    </LessonLayout>
  );
}
