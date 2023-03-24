import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { gql, useLazyQuery } from "@apollo/client";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Text,
  Badge,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { UTxO } from "@meshsdk/core";
import { useWallet, useAddress } from "@meshsdk/react";
import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";

const UTXO_AT_ADDRESS_WITH_CONTRIBUTOR_TOKEN = gql`
  query GetUTxOAtAddress($address: String!, $tokenPolicyId: Hash28Hex!) {
    utxos(
      where: { _and: [{ address: { _eq: $address } }, { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } }] }
    ) {
      txHash
    }
  }
`;

const CheckAddressHasContributorToken = () => {
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

  const [getTx, { loading, error, data }] = useLazyQuery(UTXO_AT_ADDRESS_WITH_CONTRIBUTOR_TOKEN);

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
        Check Address For PPBL2023 Token
      </Heading>
      <Text w="50%" py="3">
        Use this form to check if any address currently holds a PPBL 2023 Contributor Token. Try your address and any
        others:
      </Text>
      <FormControl color="theme.dark" pt="5">
        <FormLabel color="theme.light">Enter a Cardano Preprod Address:</FormLabel>
        <Input
          mt="3"
          bg="theme.dark"
          color="theme.light"
          id="cardanoAddress"
          name="cardanoAddress"
          onChange={formik.handleChange}
          value={formik.values.cardanoAddress}
          placeholder="Preprod Address"
        />
        <Button onClick={handleClick} size="sm" mt="3">
          Check Address
        </Button>
        {data &&
          (data.utxos.length > 0 ? (
            <Box bg="theme.green" color="theme.dark" mt="5" p="3" fontSize="sm">
              This address currently holds a PPBL2023 Contributor Token.
            </Box>
          ) : (
            <Box bg="theme.yellow" color="theme.dark" mt="5" p="3" fontSize="sm">
              This address does not hold a PPBL2023 Contributor Token.
            </Box>
          ))}
      </FormControl>
    </Box>
  );
};

export default CheckAddressHasContributorToken;
