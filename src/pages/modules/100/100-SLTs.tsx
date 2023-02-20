import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const SLTs100 = () => {
  const items = [
    { '100.1': 'I can connect a Cardano wallet to the pre-production test network' },
    { '100.2': 'I can get free tAda on the pre-production testnet' },
    { '100.3': 'I know how to safely store my keys' },
    { '100.4': 'I can mint a Contributor Token for PPBL' },
  ];

  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Text>Module 100</Text>
      <Heading size="2xl" color="#4CB5F5">Student Learning Targets</Heading>

      <List mt="2em" lineHeight="2">
        {items.map((item, index) => {
              const [moduleNumber, moduleName] = [Object.keys(item)[0], Object.values(item)[0]];
              return (
                  <ListItem mt="1em" key={moduleNumber}>
                      <Text fontSize="xl" fontWeight="bold" style={{ display: 'inline-flex' }}>
                          <Text color="#3498db" style={{ marginRight: 4 }}>{moduleNumber}</Text>
                          <Text> : {moduleName}</Text>
                      </Text>
                  </ListItem>
              );
          })}
      </List>

    </Container>
  );
};

export default SLTs100;

