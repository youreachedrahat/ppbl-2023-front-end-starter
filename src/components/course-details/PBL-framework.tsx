import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Center,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PBLFramework = () => {
  return (
    <Container maxWidth="90%" mx="auto" marginTop="2em" w="80%" fontSize="xl">
      <Heading size="lg" color="theme.blue" lineHeight="1.4">
        The goal of any Project-Based Learning (PBL) Course is to support people to become Contributors to real
        Projects.
      </Heading>
      <Text py="5">
        <Text as="span" fontWeight="bold" color="theme.green">
          Plutus PBL 2023
        </Text>{" "}
        is one example of a PBL course. Maybe you can imagine some others.
      </Text>
      
      <Text py="5">
        Every Project-Based Learning course consists of a series of{" "}
        <Text as="span" fontWeight="bold" color="theme.green">
          Modules
        </Text>
        .
      </Text>
      <Text py="5">
        In this Plutus PBL course, there are 14 Modules. New modules will be published every Monday from now through
        2023-05-08.
      </Text>
      <Container maxWidth="90%" bgColor="theme.lightGray" marginTop="2em" marginLeft="0">
        <Stack>
          <Heading size="md" lineHeight="1.4" mt="1em" color="white" textAlign="center">
            Modules are numbered and organized with the PBL Framework:
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={5} p="5">
            <GridItem colSpan={3}>
              <Box>
                <Text fontWeight="bold" m="3" color="white">
                  Onboarding (100):
                </Text>

                <Text m="3" color="white">
                  What is that? How can I get started?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" m="3" color="white">
                  Building Background Knowledge (200):
                </Text>
                <Text m="3" color="white">
                  How does it work? What do I need to know?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" m="3" color="white">
                  Specializing (300):
                </Text>
                <Text m="3" color="white">
                  How did you build it?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" m="3" color="white">
                  Contributing (400):
                </Text>
                <Text m="3" color="white">
                  How can I contribute?
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Image src="/PBLFramework.png" width="100%" alt="pblframework" />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" py="2">
        Next:
      </Heading>
      <Text my="5">
        Each module consists of a set of Student Learning Targets (SLTs) that describe what you will learn in the
        course.
      </Text>
      <Link href="/get-started/slts">
        <Button>Tell me about SLTs</Button>
      </Link>
    </Container>
  );
};

export default PBLFramework;
