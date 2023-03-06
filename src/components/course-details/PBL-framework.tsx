import { Box, Container, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const PBLFramework = () => {
  return (
      <Container maxWidth="max" marginLeft="2em" marginTop="2em">
        <Heading size="2xl" color="theme.blue" lineHeight="1.4">The goal of any PBL Course is to support people to become Contributors to real Projects.</Heading>
        <Container maxWidth="80%" bgColor="theme.lightGray"  marginTop="2em" marginLeft="0">
          <Flex flexDirection="column">
            <Heading lineHeight="1.4" mt="1em" ml="2em" color="white">
              Modules are organized with the PBL Framework:
            </Heading>
            <Flex mb="2em">
              <Box width="50%" m="2em" ml="5em">
                <Image src="/PBLFramework.png" width="100%"></Image>
              </Box>
              <Box width="80%" mr="4em" display="flex" alignItems="center">
                <Box>

                <Text fontWeight="bold" fontSize="xl" m="3" color="white">Onboarding (100):</Text>

                <Text fontSize="xl" m="3" color="white">What is that? How can I get started?</Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="xl" m="3" color="white">Building Background Knowledge (200):</Text>
                <Text fontSize="xl" m="3" color="white">How does it work? What do I need to know?</Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="xl" m="3" color="white">Specializing (300):</Text>
                <Text fontSize="xl" m="3" color="white">How did you build it?</Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="xl" m="3" color="white">Contributing (400):</Text>
                <Text fontSize="xl" m="3" color="white">How can I contribute?</Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Container>
  );
};

export default PBLFramework;
