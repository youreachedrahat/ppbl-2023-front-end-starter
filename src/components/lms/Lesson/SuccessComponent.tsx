import { Box, Text, Heading, Center } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  mastery: boolean
};
const SuccessComponent: React.FC<Props> = ({ children, mastery }) => {
  return (
    <Box w="50%" my="3" p="5" bg="theme.lightGray" color="white">
    <Heading size="md" py="3'">You will know you are successful if:</Heading>
      <Text fontSize="lg" py="3">{children}</Text>
      {mastery ? (
        <Center my='3' p='5' bg='theme.green' w="250px">
            <Heading size="md">Status: You did it!</Heading>
        </Center>
      ) : (
        <Center my='3' p='1' bg='theme.gray'>
            <Heading size="md">Status: Not yet</Heading>
        </Center>
      )}
    </Box>
  );
};

export default SuccessComponent;
