import { Box, Heading, FormControl, FormLabel, Input, Button, Center, Spinner, Divider, Text, Link as CLink } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as React from "react";
import { gql, useLazyQuery } from "@apollo/client";



/** we query for transactions with 
 * @param $source_address among the input utXos and 
 * @param $target_address among the output utXos
 * */

const GetTransactionHashesByInputsAndOutputs = gql`
query GetTransactionHashesByInputsAndOutputs($source_address: String!, $target_address: String!) {
   transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $source_address } } }
          { outputs: { address: { _eq: $target_address} } }
        ]
      }
    ) {
      hash
    }
}
`;




export const QueryComponent = () => {



  const formik = useFormik({
    initialValues: {
      sourceCardanoAddress: "",
      targetCardanoAddress: ""
    },
    onSubmit: () => { }
  });


  const [getTransactionHashes, { loading, error, data }] = useLazyQuery(GetTransactionHashesByInputsAndOutputs);

  function RenderTxHashList(txList) {
    return (
      <ul>
        {txList.map((transaction) => (
          <li>
            <Text>
              TxHash:{" "}
              <CLink
                href="https://preprod.cardanoscan.io/transaction/${transaction.hash}"
                target="_blank"
              >
                ${transaction.hash}
              </CLink>
            </Text>
          </li>
        ))}
      </ul>
    );
  }


  // When 'Get Transactions' Button  is clicked,  run the getTransactionHashes query defined above
  const handleClick = () => {
    getTransactionHashes({
      variables: {
        source_address: formik.values.sourceCardanoAddress,
        target_address: formik.values.targetCardanoAddress,
      },
    });
  };


  // Boilerplate to handle useLazyQuery loading state.
  if (loading)
    return (
      <Center flexDirection="column">
        <Heading>Loading</Heading>
        <Spinner />
      </Center>
    );

  // Boilerplate to handle useLazyQuery error state.
  if (error)
    return (
      <Center>
        <Heading>Error</Heading>
        <pre>{JSON.stringify(error)}</pre>
      </Center>
    );

  // If the query is not loading or in error state, this will be rendered on the page:
  return (
    <Box bg="theme.light" color="theme.dark" p="3">
      <Heading size="md" py="3">
        Listing hashes of transactions between two addresses
      </Heading>
      <Text py="3">
        Use this form to obtain a list of transactions from Source to Target address:
      </Text>
      <FormControl p="5" bg="theme.dark" color="theme.light">
        <FormLabel>Enter a Source Cardano Preprod Address:</FormLabel>
        <Input
          mt="3"
          id="sourceCardanoAddress"
          name="sourceCardanoAddress"
          onChange={formik.handleChange}
          value={formik.values.sourceCardanoAddress}
          placeholder="Source Preprod Address"
        />
        <FormLabel>



        </FormLabel>
        <FormLabel>Enter a Target Cardano Preprod Address:</FormLabel>
        <Input
          mt="3"
          id="targetCardanoAddress"
          name="targetCardanoAddress"
          onChange={formik.handleChange}
          value={formik.values.targetCardanoAddress}
          placeholder="Target Preprod Address"
        />
        <Button onClick={handleClick} bg="blue.300" size="sm" mt="3">
          Get Transactions
        </Button>
        {data &&
          (data.transactions.length > 0 ? (
            <Box bg="green.400" color="theme.dark" mt="5" p="3" fontSize="sm">
              <Text>These are the transactions from Source to Target.</Text>
              {RenderTxHashList(data.transactions)}
            </Box>
          ) : (
            <Box bg="yellow.400" color="theme.dark" mt="5" p="3" fontSize="sm">
              There is no valid transaction between these addresses.
            </Box>
          ))}
      </FormControl>
    </Box >
  );
};
