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
import Docs1015 from "@/src/components/course-modules/101/Docs1015.mdx";

export default function Lesson1015() {
  return (
    <LessonLayout moduleNumber={101} sltId="101.5" slug="1015">
      <Grid mx="auto" fontSize="lg" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          <Text py="3">
            <CLink href="https://aiken-lang.org/" target="_blank">
              Aiken
            </CLink>{" "}
            is a{" "}
            <CLink href="https://aiken-lang.org/#faq" target="_blank">
              new programming language and toolkit for developing smart contracts
            </CLink>{" "}
            on Cardano.
          </Text>
          <Text py="3">
            The Aiken language was written in Rust, but Aiken is not Rust. When we use Aiken, we will use some Rust
            tooling.
          </Text>
          <Text py="3">
            The <CLink href="https://aiken-lang.org/getting-started" target="_blank">Aiken documentation</CLink> is very helpful. We recommend taking a look!
          </Text>
        </GridItem>
        <GridItem>
          <VideoComponent videoId="">VIDEO DESCRIPTION</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />

      <AssignmentComponent>
        <Text>Replace with documentation - import from MDX</Text>
        <SuccessComponent mastery={false}></SuccessComponent>
        <Docs1015 />
      </AssignmentComponent>
    </LessonLayout>
  );
}
