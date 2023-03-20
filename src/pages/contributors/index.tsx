import { hexToString } from "@/src/utils";
import { gql, useQuery } from "@apollo/client";
import { Box, Center, Flex, Heading, Spacer, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Head from "next/head";

const CONTRIBUTOR_TOKEN_QUERY = gql`
  query QueryReferenceAddress($contractAddress: String!) {
    utxos(where: { address: { _eq: $contractAddress } }) {
      tokens {
        asset {
          assetName
        }
      }
      datum {
        value
      }
    }
  }
`;

type refMetadatum = {
  "int": number,
  "list": [{
    "bytes": String
  }]
}

export default function Contributors() {

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

        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th>Metadatum (int)</Th>
                <Th>Metadatum (list)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.utxos.map((utxo: any) => (
                <Tr key={utxo}>
                  <Td>{hexToString(utxo.tokens[0].asset.assetName)}</Td>
                  <Td>
                    {utxo.datum.value.fields.map((item: refMetadatum) => (
                      <>
                      {item.int?
                      <Tr key={null}>{item.int}</Tr>
                      :
                      null}
                      </>
                    ))}
                  </Td>
                  <Td>
                    {utxo.datum.value.fields.map((item: refMetadatum) => (
                      <>
                      {item.list?
                        item.list.map((item2: {"bytes": String}) => (
                          <Tr key={null}>{item2.bytes}</Tr>
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
