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
    <Box p="5" bg="theme.lightGray" borderRadius="lg">
      <Heading size="lg" pb="5" textAlign="center">
        Need Help?
      </Heading>
      <Divider />
      <Grid py="5" templateColumns="repeat(2, 1fr)" gap={10}>
        <Flex direction="column" bg="theme.green" color="theme.dark" p="1" justifyItems="center">
          <Text fontSize="xl" textAlign="center" pt="2">
            Ask Questions on Discord
          </Text>
          <CLink href="https://discord.gg/Va7DXqSSn8" target="_blank">
            <Box w="80%" mx="auto" my="5" py="3" bg="theme.yellow" borderRadius="lg" _hover={{ bg: "theme.blue"}}>
              <Text textAlign="center" color="theme.dark">Join Gimbalabs Discord</Text>
            </Box>
          </CLink>
        </Flex>
        <Flex direction="column" bg="theme.green" color="theme.dark" p="1" justifyItems="center">
          <Text fontSize="xl" textAlign="center" pt="2">
            Join Plutus PBL Live Coding
          </Text>
          <Link href="/live-coding">
            <Box w="80%" mx="auto" my="5" py="3" bg="theme.yellow" borderRadius="lg" _hover={{ bg: "theme.blue"}}>
              <Text textAlign="center">View Live Coding Calendar</Text>
            </Box>
          </Link>
        </Flex>
      </Grid>
    </Box>
  );
};

export default GetHelp;
