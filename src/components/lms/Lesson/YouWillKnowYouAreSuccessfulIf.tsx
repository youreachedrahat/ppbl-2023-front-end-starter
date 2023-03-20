import { Box, Text, Heading, Center, Badge, Flex, Spacer, Divider } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  criteria: string;
  text: string;
};
const YouWillKnowYouAreSuccessfulIf: React.FC<Props> = ({ criteria, text }) => {
  return (
    <Box w={["95", "60%"]} mx="auto" my="10" p="5" bg="theme.green" color="theme.dark" fontSize="lg">
      <Heading size="md" py="3">
        You will know you are successful if{" "}{criteria}
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};

export default YouWillKnowYouAreSuccessfulIf;
