import { Flex, Box, Link as CLink, Center, Spacer, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import GimbalG from "../../ui/GimbalG";

const LanguageList = () => {
  return (
    <>
      <Box w={{ base: "100%", md: "70%" }} mx="auto" p="5">
        <Center flexDirection={["column", "column", "row"]} fontSize="lg" color="theme.yellow">
          <Spacer />
          <CLink href="https://es.plutuspbl.io/">
            Español
          </CLink>
          <Spacer />
          <CLink href="https://fr.plutuspbl.io/">
            Française
          </CLink>
          <Spacer />
          <CLink href="https://id.plutuspbl.io/">
            Indonesian
          </CLink>
          <Spacer />

          <CLink href="https://ja.plutuspbl.io/">
            日本語
          </CLink>
          <Spacer />


          <CLink href="https://vi.plutuspbl.io/">
            Tiếng Việt
          </CLink>
          <Spacer />

        </Center>
      </Box>
    </>
  );
};

export default LanguageList;
