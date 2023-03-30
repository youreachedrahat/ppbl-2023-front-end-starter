import { Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

const GPTENav = () => {
  return (
    <Flex direction="row" bg="theme.light" color="theme.dark" p="2" mb="5">
      <Spacer />
      <Text py="2">
        <Link href="/contributors/commit">Commitment Demo</Link>
      </Text>
      <Spacer />
      <Text py="2">
        <Link href="/contributors/distribute">Distribute Demo</Link>
      </Text>
      <Spacer />
    </Flex>
  );
};

export default GPTENav
