import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

import GetHelp from "../Course/GetHelp";

// Props
// SLT
// children
// Next Lesson?

type Props = {
  children?: React.ReactNode;
  nextButtonHref: string;
  nextButtonTitle: string;
};

const MasteryAssignmentLayout: React.FC<Props> = ({ children, nextButtonHref, nextButtonTitle }) => {
  return (
    <>
      <Box w={["100%","95%"]} marginTop={["0.5em", "2em"]}>
        {children}

        {nextButtonHref && (
          <Flex direction="row">
            <Spacer />
            <Link href={`/modules/${nextButtonHref}/slts`}>
              <Button my="1em" colorScheme="green">{nextButtonTitle}</Button>
            </Link>
            <Spacer />
          </Flex>
        )}
      </Box>
      <Divider py="5" w="90%" marginLeft="1em" />
      <Box mt="10">
        <GetHelp />
      </Box>
    </>
  );
};

export default MasteryAssignmentLayout;
