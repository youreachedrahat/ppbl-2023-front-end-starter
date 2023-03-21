import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { gql, useLazyQuery } from "@apollo/client";
import { Box, Heading, FormControl, FormLabel, Input, Button, Center, Spinner, Divider, Text, Badge } from "@chakra-ui/react";
import { useWallet, useAddress } from "@meshsdk/react";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";

const TX_FROM_ADDRESS_WITH_POLICYID = gql`
  query TxFromAddressWithPolicyId($address: String!, $tokenPolicyId: Hash28Hex!) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $address } } }
          { outputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
        ]
      }
    ) {
      hash
    }
  }
`;

const CheckTxFromAddressWithPolicyID = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();

  const [queryAddress, setQueryAddress] = useState<string | undefined>(undefined);

  const formik = useFormik({
    initialValues: {
      cardanoAddress: "",
    },
    onSubmit: (values) => {
      setQueryAddress(values.cardanoAddress);
    },
  });

  const [getTx, { loading, error, data }] = useLazyQuery(TX_FROM_ADDRESS_WITH_POLICYID);

  const handleClick = () => {
    setQueryAddress(formik.values.cardanoAddress);
    getTx({
      variables: {
        address: formik.values.cardanoAddress,
        tokenPolicyId: contributorTokenPolicyId,
      },
    });
  };

  if (loading)
    return (
      <Center flexDirection="column">
        <Heading>Loading</Heading>
        <Spinner />
      </Center>
    );
  if (error)
    return (
      <Center>
        <Heading>Error</Heading>
        <pre>{JSON.stringify(error)}</pre>
      </Center>
    );

  return (
    <Box borderColor="theme.four" bg="theme.lightGray" p="5" className="demo-component">
      <Badge size="lg">You will learn how to build this component in Module 201</Badge>
      <Heading size="md" py="3">
        Check Transaction from Address with Policy ID
      </Heading>
      <Text w="50%" py="3">
        This query returns the hash of any transaction with inputs from the provided address that included a PPBL 2023
        Contributor Token in an output.
      </Text>
      <FormControl color="theme.dark" pt="5">
        <FormLabel color="theme.light">Paste a Cardano Preprod Address here:</FormLabel>
        <Input
          mb="3"
          bg="theme.dark"
          id="cardanoAddress"
          name="cardanoAddress"
          onChange={formik.handleChange}
          value={formik.values.cardanoAddress}
          placeholder="Preprod Address"
        />
        <Button onClick={handleClick} size="sm">
          Check Address
        </Button>
      </FormControl>

      {data && (
        <>
          <Divider pt="5" />
          <Heading size="md">Query Result</Heading>
          <Box fontSize="sm" fontWeight="bold" p="2" color="theme.light">
            Address: {queryAddress}
          </Box>
          {data && (data.transactions.length > 0 ? (
          <>
            <Box bg="theme.light" color="theme.dark" mt="5" p="3" fontSize="sm">
              <Box>Success!</Box>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Box>
          </>
        ) : (
          <Box bg="theme.light" color="theme.dark" mt="5" p="3" fontSize="sm">This address does not hold a Contributor Token</Box>
        ))}
        </>
      )}
    </Box>
  );
};

export default CheckTxFromAddressWithPolicyID;
