import { Box, Text, Heading } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};
const AssignmentComponent: React.FC<Props> = ({ children }) => {
  return (
    <Box borderLeft="2px" borderColor="theme.four" my="3" pl="5" fontSize="lg" lineHeight="9">
        <Heading size="md" py="3">Mastery Assignment:</Heading>
      {children}
    </Box>
  );
};

export default AssignmentComponent;
