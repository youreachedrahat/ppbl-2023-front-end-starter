import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { gql, useLazyQuery } from "@apollo/client";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Spinner,
  Divider,
  Text,
  Badge,
  Link as CLink,
} from "@chakra-ui/react";
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
        This form returns the hash of any transaction from the provided address that included a PPBL 2023
        Contributor Token in an output.
      </Text>
      <FormControl color="theme.dark" pt="5">
        <FormLabel color="theme.light">Enter a Cardano Preprod Address:</FormLabel>
        <Input
          mb="3"
          bg="theme.dark"
          color="theme.light"
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
          {data &&
            (data.transactions.length > 0 ? (
              <Box bg="theme.green" color="theme.dark" mt="5" p="3" fontSize="sm">
                <Text>This address sent a transaction with a PPBL2023 Token as output.</Text>
                <Text>
                  TxHash:{" "}
                  <CLink
                    href={`https://preprod.cardanoscan.io/transaction/${data.transactions[0].hash}`}
                    target="_blank"
                    color="theme.lightGray"
                  >
                    {data.transactions[0].hash}
                  </CLink>
                </Text>
              </Box>
            ) : (
              <Box bg="theme.yellow" color="theme.dark" mt="5" p="3" fontSize="sm">
                There is no valid transaction from this address.
              </Box>
            ))}
        </>
      )}
    </Box>
  );
};

export default CheckTxFromAddressWithPolicyID;
