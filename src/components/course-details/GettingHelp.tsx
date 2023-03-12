import { Button, Container, Divider, Heading, ListItem, OrderedList, Text, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import GetHelp from "../lms/Course/GetHelp";

const GettingHelp = () => {
  return (
    <Container maxWidth="70%" marginLeft="1em" marginTop="2em" fontSize="xl">
      <Heading size="2xl" color="theme.blue" my="10">
        What happens when I get stuck?
      </Heading>
      <Text py="3">
        You will probably have questions as you work through this Plutus Project-Based Learning course. We hope that you do! 
      </Text>
      <Text py="3">
        This course is designed to show you some essential information, and then for you
        to go try some things. The wonderful thing about trying things is that it helps you find out what you know and do not know.
      </Text>
      <Text py="3">
        Sometimes you will find out that you know something new, and other times, you might get stuck.
      </Text>
      <Text py="3">
        If you get stuck there are two ways to ask for help:
      </Text>
      <OrderedList ml="10" mb="10">
        <ListItem pl="3">Ask for help on <CLink href="https://discord.gg/Va7DXqSSn8">Gimbalabs Discord</CLink></ListItem>
        <ListItem pl="3">Join a <CLink><Link href="/live-coding">Plutus PBL Live Coding Session every Wednesday or Thursday from 1430-1600 UTC</Link></CLink></ListItem>
      </OrderedList>
      <Divider py="3" />
      <Text py="3" fontWeight="bold" color="theme.green">
        Look for the following buttons at the bottom of each lesson page:
      </Text>
      <GetHelp />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Next:
      </Heading>
      <Text fontSize="xl" my="5">
        All of our work leads toward Governance.
      </Text>
      <Link href="/get-started/governance">
        <Button>How does PPBL connect to Governance?</Button>
      </Link>
    </Container>
  );
};

export default GettingHelp;
