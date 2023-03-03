import { Box, Text, Heading } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};
const AssignmentComponent: React.FC<Props> = ({ children }) => {
  return (
    <Box w="80%" mx="auto" my="3" fontSize="lg" lineHeight="9">
        <Heading size="lg" py="3">Mastery Assignment:</Heading>
      {children}
    </Box>
  );
};

export default AssignmentComponent;
