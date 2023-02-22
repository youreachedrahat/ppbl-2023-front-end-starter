import { Box, Container, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const PBLFramework = () => {
  return (
      <Container maxWidth="max" marginLeft="2em" marginTop="2em">
        <Heading size="2xl" color="#4CB5F5" lineHeight="1.4">The goal of any PBL Course is to support people to become Contributors to real Projects.</Heading>
        <Container maxWidth="80%" bgColor="gray.400"  marginTop="2em" marginLeft="0">
          <Flex flexDirection="column">
            <Heading lineHeight="1.4" mt="1em" ml="2em" color="black">
              Modules are organized with the PBL Framework:
            </Heading>
            <Flex mb="2em">
              <Box width="50%" m="2em" ml="5em">
                <Image src="./PBLFramework.png" width="60%"></Image>
              </Box>
              <Box width="50%" mr="4em" display="flex" alignItems="center">
                <Box>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="black">Onboarding (100):</Text>
                
                <Text fontSize="xl" m="0.5em" color="gray.800">What is that? How can I get started?</Text>

                <Divider/>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="black">Building Background Knowledge (200):</Text>
                <Text fontSize="xl" m="0.5em" color="gray.800">How does it work? What do I need to know?</Text>

                <Divider/>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="black">Specializing (300):</Text>
                <Text fontSize="xl" m="0.5em" color="gray.800">How did you build it?</Text>

                <Divider/>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="black">Contributing (400):</Text>
                <Text fontSize="xl" m="0.5em" color="gray.800">How can I contribute?</Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Container>
  );
};

export default PBLFramework;