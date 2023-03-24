import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import slts from "@/src/data/slts-english.json";
// import slts from "@/src/data/slts-indonesian.json";

interface SLT {
  id: string;
  slt: string;
}

type Props = {
  moduleNumber: number;
  id: string
};


const SLT: React.FC<Props> = ({ moduleNumber, id }) => {
  const currentModule = slts.modules.filter((module) => module.number == moduleNumber)[0]
  const items: SLT[] = currentModule.slts
  const currentSLT = items.filter((i) => i.id == id)[0]
  const textColorBlue = useColorModeValue("theme.darkBlue", "theme.blue");

  return (
    <Box borderLeft="1px" pl="5" py="1">
      <Text fontSize="xl">SLT{" "}{id}:{" "}{currentSLT.slt}</Text>
    </Box>
  );
};

export default SLT;
