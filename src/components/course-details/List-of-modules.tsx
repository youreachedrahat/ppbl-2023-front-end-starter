import { CheckCircleIcon } from "@chakra-ui/icons"
import { Container, Divider, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const ListOfModules = () => {
    const items = [
        { '100': 'Introductions and Getting Started' },
        { '101': 'Write Your First Smart Contract' },
        { '102': 'Build Your First Transactions' },
        { '103': 'What You Will Learn in This Course' },
        { '201': 'Build a Front End Dapp Template' },
        { '202': 'Three Ways to Mint a Token' },
        { '203': 'Three Ways to Mint an NFT' },
        { '204': 'Writing and Using Plutus Validators' },
        { '301': 'PPBL Faucet Project' },
        { '302': 'On-Chain Essentials: Plutus' },
        { '303': 'Off-Chain Essentials: Transactions, User Interfaces, and Queries' },
        { '304': 'Intro to Testing and Optimization' },
        { '401': 'Introducing Gimbal Project Treasury and Escrow' }
    ];
    
    return (
        <Container maxWidth="max" marginLeft="0">
                <Heading size="2xl" color="#4CB5F5" marginTop="1em">Plutus PBL is organized into Modules</Heading>
                <Text fontSize="xl" marginTop="1em">
                    This is the first module in the course. It is called "Introductions and Getting Started".
                </Text>
            
    
            <Divider marginTop="1em"/>
    

            <Heading size="2xl" color="#4CB5F5" marginTop="1em">Here is a list of all Modules in this course:</Heading>

            <List spacing={3} marginTop="1em">
                {items.map((item, index) => {
                    const [moduleNumber, moduleName] = [Object.keys(item)[0], Object.values(item)[0]];
                    return (
                        <ListItem key={moduleNumber}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Text fontWeight="bold" style={{ display: 'inline-flex' }}>
                                <Text color="#3498db" style={{ marginRight: 4 }}>{moduleNumber}</Text>
                                {moduleName}
                            </Text>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
    
    
};

export default ListOfModules;
