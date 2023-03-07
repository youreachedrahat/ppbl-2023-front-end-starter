import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import slts from "@/src/data/slts.json";

interface SLT {
  id: string;
  slt: string;
}

interface SLTsItemsProps {
  moduleTitle: string;
  moduleNumber: number;
}

const SLTsItems = ({ moduleTitle, moduleNumber }: SLTsItemsProps) => {
  const currentModule = slts.modules.filter((module) => module.number == moduleNumber)
  const items: SLT[] = currentModule[0].slts

  return (
    <Container maxWidth="80%" marginTop="2em">
      <Text>{moduleTitle}</Text>
      <Heading size="2xl" color="theme.blue">Student Learning Targets</Heading>

        <List mt="2em" lineHeight="2">
            {items.map((item, index) => {
                const [id, SLT] = [item.id, item.slt];
                return (
                <ListItem mt="1em" key={id}>
                    <Text fontSize="xl" fontWeight="bold" style={{ display: 'inline-flex' }}>
                    <Text color="theme.blue" style={{ marginRight: 4 }}>{id}</Text>
                    <Text> : {SLT}</Text>
                    </Text>
                </ListItem>
                );
            })}
        </List>
    </Container>
  );
};

export default SLTsItems;