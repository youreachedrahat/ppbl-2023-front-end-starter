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

export default function Lesson1011() {
  return (
    <LessonLayout moduleNumber={101} sltId="101.1" slug="1011">
      <Grid mx="auto" fontSize="lg" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text py="3"></Text>
          <Text py="3"></Text>
          <Text py="3"></Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="">What does it mean to compile a Plutus script?</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

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
