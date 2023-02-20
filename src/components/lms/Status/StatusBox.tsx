import { Box, Text } from "@chakra-ui/react";

export const StatusBox = ({ condition, text }: { condition: boolean; text: string }) => {
    return (
      <Box
        bg={condition ? "green.400" : "yellow.100"}
        color={condition ? "white" : "black"}
        w="100%"
        px="2"
        py="2"
        fontSize="sm"
        border="1px solid"
        borderColor='whiteAlpha'
        >
          <Text>{text}</Text>
      </Box>
  
    );
  };