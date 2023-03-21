import { CONTRIBUTOR_TOKEN_QUERY } from "@/src/data/queries/contributorQueries";
import { hexToString } from "@/src/utils";
import { gql, useQuery } from "@apollo/client";
import { Box, Center, Flex, Heading, Input, Spacer, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

type refMetadatum = {
  "int": number,
  "list": [{
    "bytes": string
  }]
}

export default function Contributors() {

  const [searchTerm, setSearchTerm] = useState<string>('100PPBL2023');

  const { data, loading, error } = useQuery(CONTRIBUTOR_TOKEN_QUERY, {
    variables: {
      contractAddress: "addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0",
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

  return (
    <>
      <Head>
        <title>PPBL 2023</title>
        <meta name="description" content="PPBL Contributors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w={["95%", "70%"]} mx="auto" mb="4em">
        <Heading py="10" size="2xl">
          PPBL Tokens:
        </Heading>

        <Flex direction="row" justify="flex-start" align={'center'}>
          <Text fontSize="-moz-initial" mr="2">SEARCH :</Text>
          <Input
            w="-moz-max-content"
            placeholder='Search by asset name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Flex>

        <TableContainer mt="4">
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th>Metadatum (int)</Th>
                <Th>Metadatum (list)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.utxos
                .filter((utxo: any) =>
                  hexToString(utxo.tokens[0].asset.assetName)
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((utxo: any) => (
                  <Tr key={utxo}>
                    <Td>{hexToString(utxo.tokens[0].asset.assetName)}</Td>
                    <Td>
                      {utxo.datum.value.fields.map((item: refMetadatum) => (
                        <>
                          {item.int ? (
                            <Tr key={null}>{item.int}</Tr>
                          ) : null}
                        </>
                      ))}
                    </Td>
                    <Td>
                      {utxo.datum.value.fields.map((item: refMetadatum) => (
                        <>
                        {item.list?
                          item.list.map((item2: {"bytes": string}) => (
                            <Tr key={null}>{hexToString(item2.bytes)}</Tr>
                        ))
                        :
                        null
                        }
                        </>
                      ))}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>

      </Box>
    </>
  );
}
