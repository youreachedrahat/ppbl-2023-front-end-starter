import { useQuery, gql } from "@apollo/client";
import { Box, Heading, Text, Center, Spinner, Grid, UnorderedList, ListItem, Button } from "@chakra-ui/react";

import { projectAsset, treasury } from "gpte-config";
import { GraphQLToken, GraphQLUTxO } from "@/src/types/cardanoGraphQL";
import { TREASURY_UTXO_QUERY } from "../../../data/queries/treasuryQueries";
import { hexToString } from "../../../utils";
import { useState } from "react";
import CommitmentTx from "@/src/components/gpte/transactions/CommitmentTx";

export default function CommitToCurrentProject() {
  const [selectedProject, setSelectedProject] = useState("");

  const { data, loading, error } = useQuery(TREASURY_UTXO_QUERY, {
    variables: {
      contractAddress: treasury.address,
    },
  });

  if (loading) {
    return (
      <Center p="10">
        <Spinner size="xl" speed="1.0s" />
      </Center>
    );
  }

  if (error) {
    console.error(error);
    return <Heading size="lg">Error loading data...</Heading>;
  }

  const handleChooseProject = (project: string) => {
    setSelectedProject(project);
  };


  return (
    <Box my="5" p="5" bg="#343434">
      <Heading color="white">Current List of Projects</Heading>
      <Text py="3" w="50%">
        Here is the inline datum at the Treasury UTxO. We can use it to make a list of approved Projects, whether
        these projects are Course Modules, or funded Projects. Use any part of this component to start making
        good-looking GPTE examples!
      </Text>
      <pre>{JSON.stringify(data.utxos[0].datum.value.fields[0].list, null, 2)}</pre>

      <Heading py="3" size="md">
        Using provided hexToString() function:
      </Heading>
      <UnorderedList>
        {data.utxos[0].datum.value.fields[0].list.map((d: any) => (
          <ListItem key={null}>{hexToString(d.bytes)}</ListItem>
        ))}
      </UnorderedList>

      <Heading color="white" pt="5">
        Commit to Projects
      </Heading>
      <Text py="2">Use the treasury query above to allow Contributor to select from list.</Text>
      <Text py="2">To do for PPBL2023: How can we add contract logic to allow commitment to certain modules?</Text>
      <Text py="2">For now, this template allows Contributor to select any approved project from a list.</Text>
      <Heading py="3">Choose a Module or Project to Commit To:</Heading>
      {data.utxos[0].datum.value.fields[0].list.map((d: any) => (
        <Button key={null} colorScheme="green" mx="5" onClick={() => handleChooseProject(hexToString(d.bytes))}>
          {hexToString(d.bytes)}
        </Button>
      ))}
      {selectedProject && (
        <CommitmentTx selectedProject={selectedProject} treasuryUTxO={data.utxos[0]} />
      )}
    </Box>
  );
}
