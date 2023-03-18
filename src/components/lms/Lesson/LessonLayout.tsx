import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  OrderedList,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

import SLT from "@/src/components/ui/Text/SLT";
import GetHelp from "../Course/GetHelp";
import LessonNavigation from "./LessonNavigation";

// Props
// SLT
// children
// Next Lesson?

type Props = {
  children?: React.ReactNode;
  moduleNumber: number;
  sltId: string;
  slug: string;
  nextModule?: string;
};

const LessonLayout: React.FC<Props> = ({ children, moduleNumber, sltId, slug, nextModule }) => {
  return (
    <>
      <Box w="90%" marginLeft="1em" marginTop="2em">
        <SLT moduleNumber={moduleNumber} id={sltId} />
        <Divider py="5" />

        {children}

      <LessonNavigation moduleNumber={moduleNumber} currentSlug={slug} />

      {nextModule && (
        <Flex direction="row">
          <Spacer />
          <Link href={`/modules/${nextModule}/slts`}>
            <Button my="1em">Proceed to Module {nextModule}</Button>
          </Link>
        </Flex>
      )}
      </Box>
      <Divider py="5" w="90%"  marginLeft="1em"/>
      <Box mt="10">
        <GetHelp />
      </Box>
    </>
  );
};

export default LessonLayout;
