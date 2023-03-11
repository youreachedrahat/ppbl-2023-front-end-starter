import {
  Center,
  Flex,
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Divider,
  Button,
  Spacer,
  Link as CLink,
} from "@chakra-ui/react";
import Link from "next/link";

const GetHelp = () => {
  return (
    <Flex direction="row" p="3">
      <Spacer />
      
      <Heading size="lg" textAlign="center">
        Need Help?
      </Heading>
      <Spacer />
      <Flex direction="column" justifyItems="center">
        <Text fontSize="xl" textAlign="center">
          Ask Questions on Discord
        </Text>
        <CLink href="https://discord.gg/Va7DXqSSn8" target="_blank">
          <Box mt="2" bg="theme.yellow" borderRadius="lg" _hover={{ bg: "theme.blue" }}>
            <Text textAlign="center" color="theme.dark">
              Join Gimbalabs Discord
            </Text>
          </Box>
        </CLink>
      </Flex>
      <Spacer />
      <Flex direction="column" justifyItems="center">
        <Text fontSize="xl" textAlign="center">
          Join Plutus PBL Live Coding
        </Text>
        <Link href="/live-coding">
          <Box mt="2" bg="theme.yellow" color="theme.dark" borderRadius="lg" _hover={{ bg: "theme.blue" }}>
            <Text textAlign="center">View Live Coding Calendar</Text>
          </Box>
        </Link>
      </Flex>
      <Spacer />

    </Flex>
  );
};

export default GetHelp;
