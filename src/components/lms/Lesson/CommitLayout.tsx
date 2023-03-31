import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

import GetHelp from "../Course/GetHelp";
import LessonNavigation from "./LessonNavigation";

// Props
// SLT
// children
// Next Lesson?

type Props = {
  children?: React.ReactNode;
};

const CommitLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box w="98%" my="10">
        {children}
      </Box>
      <LessonNavigation moduleNumber={103} currentSlug="commit" />
      <Divider py="5" w="90%" marginLeft="1em" />
      <Box mt="10">
        <GetHelp />
      </Box>
    </>
  );
};

export default CommitLayout;
