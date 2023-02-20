import { Box } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};
const MDXLessonLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box w="80%" mx="auto" bg="theme.dark" color="white" my="5" p="5" className="mdx-content">
        {children}
    </Box>
  );
};

export default MDXLessonLayout;
