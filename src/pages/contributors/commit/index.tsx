import { useQuery, gql } from "@apollo/client";
import {
  Box,
  Heading,
  Text,
  Center,
  Spinner,
  Grid,
  UnorderedList,
  ListItem,
  Button,
  AccordionItem,
  AccordionPanel,
  Accordion,
  AccordionButton,
} from "@chakra-ui/react";

import { projectAsset, treasury } from "gpte-config";
import { GraphQLToken, GraphQLUTxO } from "@/src/types/cardanoGraphQL";
import { TREASURY_UTXO_QUERY } from "../../../data/queries/treasuryQueries";
import { hexToString } from "../../../utils";
import { useContext, useState } from "react";
import CommitmentTx from "@/src/components/gpte/transactions/CommitmentTx";
import { PPBLContext } from "@/src/context/PPBLContext";
import GPTENav from "@/src/components/gpte/GPTENav";

export default function CommitToCurrentProject() {
  const [selectedProject, setSelectedProject] = useState("");
  const ppblContext = useContext(PPBLContext);

  // if (loading) {
  //   return (
  //     <Center p="10">
  //       <Spinner size="xl" speed="1.0s" />
  //     </Center>
  //   );
  // }

  // if (error) {
  //   console.error(error);
  //   return <Heading size="lg">Error loading data...</Heading>;
  // }

  const handleChooseProject = (project: string) => {
    setSelectedProject(project);
  };

  return (
    <>
      <GPTENav />
      <Box w="80%" mx="auto">
        <Heading color="white">Current List of Projects</Heading>
        {ppblContext.connectedContribToken && <Text py="3">Connected Token: {ppblContext.connectedContribToken}</Text>}

        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Text>DEV STUFF</Text>
            </AccordionButton>
            <AccordionPanel>
              <Heading>Here is the Treasury UTxO - from useContext</Heading>
              <pre>{JSON.stringify(ppblContext.treasuryUTxO, null, 2)}</pre>
              <Heading>Current Treasury Datum</Heading>
              <Text py="3" w="50%">
                Here is the inline datum at the Treasury UTxO. We can use it to make a list of approved Projects,
                whether these projects are Course Modules, or funded Projects. Use any part of this component to start
                making good-looking GPTE examples!
              </Text>
              {ppblContext.treasuryUTxO && (
                <pre>{JSON.stringify(ppblContext?.treasuryUTxO?.datum?.value.fields[0].list, null, 2)}</pre>
              )}
              <Heading py="3" size="md">
                Using provided hexToString() function:
              </Heading>
              <UnorderedList>
                {ppblContext.treasuryUTxO?.datum?.value.fields[0].list.map((d: any) => (
                  <ListItem key={null}>{hexToString(d.bytes)}</ListItem>
                ))}
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading color="white" pt="5" fontWeight="300">
          Commit to Module 103
        </Heading>
        {ppblContext.treasuryUTxO &&
          ppblContext.treasuryUTxO.datum?.value.fields[0].list.map((d: any) => (
            <Button key={null} colorScheme="green" mx="5" onClick={() => handleChooseProject(hexToString(d.bytes))}>
              {hexToString(d.bytes)}
            </Button>
          ))}
        {selectedProject && ppblContext.treasuryUTxO && <CommitmentTx selectedProject={selectedProject} />}
      </Box>
    </>
  );
}
