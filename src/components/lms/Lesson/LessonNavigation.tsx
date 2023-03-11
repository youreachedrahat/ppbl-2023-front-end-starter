import { Box, Text, Heading, Button, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

import slts from "@/src/data/slts-english.json";
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
          <Text>Continue to {previousLesson.name}</Text>
        </Link>
      )}
      <Spacer />
      {nextLesson && (
        <Link href={`/modules/${moduleNumber}/${nextLesson.slug}`}>
          <Text>Continue to {nextLesson.name}</Text>
        </Link>
      )}
    </Flex>
  );
};

export default LessonNavigation;
