import {
  Box,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AboutSLTs = () => {
  const textColorBlue = useColorModeValue("theme.darkBlue", "theme.blue");
  return (
    <Box w="95%" marginTop="2em">
      <Heading size={["lg", "2xl"]} color={textColorBlue}>
        About Student Learning Targets (SLTs)
      </Heading>
      <Heading size={["md", "lg"]} color="theme.green">
        Here is how this course works:
      </Heading>
      <OrderedList marginLeft="3em">
        <ListItem fontSize="xl" py="2">
          PPBL 2023 consists of 14 course Modules
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Each Module starts with a list of Student Learning Targets (SLTs)
        </ListItem>
        <ListItem fontSize="xl" py="2">
          The lessons in each module are designed to help you master each Student Learning Target.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          You will complete projects to learn through experience how Cardano works.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Along the way, you will demonstrate mastery of the SLTs.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Together, we will explore ways to use Cardano and Plutus to share a record of what you have learned.
        </ListItem>
      </OrderedList>
      <Divider py="5" />
      <Heading size="xl" color={textColorBlue}>
        What is a Student Learning Target?
      </Heading>
      <Text fontSize="xl" mb="5">
        A student learning target describes what you will know or be able to do at the end of each Module.
      </Text>
      <Text fontSize="xl" my="5">
        SLTs should help you understand why we created each lesson.
      </Text>
      <Divider py="5" />
      <Heading size="xl" color={textColorBlue}>
        Next:
      </Heading>
      <Text fontSize="xl" mb="5">
        Take a look at the list of Course Modules and Student Learning Targets in PPBL 2023.
      </Text>
      <Link href="/get-started/modules">
        <Button>Show me the Modules and SLTs</Button>
      </Link>
    </Box>
  );
};

export default AboutSLTs;
