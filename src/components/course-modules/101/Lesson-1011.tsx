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
          <Text py="3">
            This course is called Plutus PBL, and in this module we are going to show you how to write smart contracts
            in Plutus AND in other languages. How can this be? To get started, we need to distinguish between two
            different meanings of Plutus.
          </Text>
          <Text py="3">
            PlutusTx is a human-readable programming language based on Haskell. When people say you have to know Haskell
            to be a Plutus developer, this is what they are talkikng about.
          </Text>
          <Text>However, PlutusTx is just one part of the greater Plutus platform (need precise language here).</Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="">VIDEO DESCRIPTION</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

      <AssignmentComponent>
        <Text>
          In this Module, you will not see a Mastery Status on each Lesson. Instead, look for where it says &rdquo;You
          will know you are successful if...&rdquo;
        </Text>
        <Text>
          SLT 101.1 is a &rdquo;big picture&rdquo; learning target. This means that you can always improve, but you might never be done -- there will always be something new to learn about plutus validators!
        </Text>
      </AssignmentComponent>
    </LessonLayout>
  );
}
