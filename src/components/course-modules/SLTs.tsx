import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

interface Item {
    id: string;
    SLT: string;
  }
  
  interface SLTsItemsProps {
    items: Item[];
  }

const SLTsItems = ({ items }: SLTsItemsProps) => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Text>Module 100</Text>
      <Heading size="2xl" color="theme.blue">Student Learning Targets</Heading>

        <List mt="2em" lineHeight="2">
            {items.map((item, index) => {
                const [id, SLT] = [item.id, item.SLT];
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