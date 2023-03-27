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
  nextModule: string;
};

const SummaryLayout: React.FC<Props> = ({ children, nextModule }) => {
  return (
    <>
      <Box w="95%" marginTop="2em">
        {children}

        {nextModule && (
          <Flex direction="row">
            <Spacer />
            <Link href={`/modules/${nextModule}/slts`}>
              <Button my="1em" colorScheme="green">Proceed to Module {nextModule}</Button>
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

export default SummaryLayout;
