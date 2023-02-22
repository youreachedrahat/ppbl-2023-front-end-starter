import { Box, Text } from "@chakra-ui/react";

export const StatusBox = ({ condition, text }: { condition: boolean; text: string }) => {
    return (
      <Box
        bg={condition ? "theme.green" : "theme.pastelYellow"}
        color={condition ? "white" : "black"}
        w="100%"
        px="2"
        py="2"
        fontSize="sm"
        border="1px solid"
        >
          <Text>{text}</Text>
      </Box>
  
    );
  };