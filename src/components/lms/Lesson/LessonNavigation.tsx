import { Box, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

import slts from "@/src/data/slts-english.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import slts from "@/src/data/slts-indonesian.json";

type Props = {
  moduleNumber: number;
  currentSlug: string;
};
const LessonNavigation: React.FC<Props> = ({ moduleNumber, currentSlug }) => {
  const currentModule = slts.modules.filter((module) => module.number == moduleNumber)[0];
  const lessonList = currentModule.lessons;
  const lessonIndex = lessonList.findIndex((lesson) => lesson.slug == currentSlug);

  let previousLesson = undefined;
  let nextLesson = undefined;

  if (lessonIndex == 0) {
    nextLesson = lessonList[1];
  } else if (lessonIndex == lessonList.length - 1) {
    previousLesson = lessonList[lessonIndex - 1];
  } else {
    previousLesson = lessonList[lessonIndex - 1];
    nextLesson = lessonList[lessonIndex + 1];
  }

  return (
    <Flex direction="row" p="2" bg="theme.lightGray">
      {previousLesson && (
        <Link href={`/modules/${moduleNumber}/${previousLesson.slug}`}>
          <Flex alignItems="center" style={{ display: 'inline-flex' }} color="white" _hover={{bgColor: "theme.yellow", color: "black"}} p="2" borderRadius="lg">
            <FaChevronLeft />
            <Text ml="2">{previousLesson.name}</Text>
          </Flex>
        </Link>
      )}
      <Spacer />
      {nextLesson && (
        <Link href={`/modules/${moduleNumber}/${nextLesson.slug}`}>
          <Flex alignItems="center" style={{ display: 'inline-flex' }} color="white" _hover={{bgColor: "theme.yellow", color: "black"}} p="2" borderRadius="lg">
            <Text mr="2">{nextLesson.name}</Text>
            <FaChevronRight />
          </Flex>
        </Link>
      )}
    </Flex>
  );
};

export default LessonNavigation;
