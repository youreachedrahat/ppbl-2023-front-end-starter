import { Flex, Box, Link as CLink, Center, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <Box bg="theme.lightGray" p="5">
      <Center fontSize="4xl" color="theme.yellow">
        <Spacer />
        <CLink href="https://twitter.com/gimbalabs" target="_blank">
            <FaTwitter />
        </CLink>
        <Spacer />
        <CLink href="https://www.youtube.com/c/gimbalabs" target="_blank">
            <FaYoutube />
        </CLink>
        <Spacer />
        <CLink href="https://discord.gg/Va7DXqSSn8" target="_blank">
            <FaDiscord />
        </CLink>
        <Spacer />
      </Center>
    </Box>
  );
};

export default SocialLinks;
