import { Box, Text, Heading } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};
const AssignmentComponent: React.FC<Props> = ({ children }) => {
  return (
    <Box my="5" p="5">
      <Box my="5" fontSize="lg" lineHeight="9">
        <Heading size="lg" py="3">
          Mastery Assignment:
        </Heading>
        {children}
      </Box>
    </Box>
  );
};

export default AssignmentComponent;
