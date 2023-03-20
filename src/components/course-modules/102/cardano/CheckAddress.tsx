import { Box, Heading, FormControl, FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react";
import { KoiosProvider, UTxO } from "@meshsdk/core";
import { useWallet, useAddress } from "@meshsdk/react";
import { useFormik } from "formik";
import * as React from "react";
import { useEffect, useState } from "react";

const CheckAddress = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();

  const koiosProvider = new KoiosProvider("preprod");
  const [queryAddress, setQueryAddress] = useState<string | undefined>(undefined);
  const [addressUTxOs, setAddressUTxOs] = useState<UTxO[] | undefined>(undefined);

  const formik = useFormik({
    initialValues: {
      cardanoAddress: "",
    },
    onSubmit: (values) => {
      setQueryAddress(values.cardanoAddress);
    },
  });

  useEffect(() => {
    const fetchAddressUTxOs = async () => {
      if (queryAddress) {
        const _addressUTxOs = await koiosProvider.fetchAddressUTxOs(queryAddress);
        setAddressUTxOs(_addressUTxOs);
      }
    };

    if (queryAddress) {
      fetchAddressUTxOs();
    }
  }, [queryAddress]);

  const handleClick = async () => {
    setQueryAddress(formik.values.cardanoAddress);
  };

  return (
    <Box borderColor="theme.four" bg="theme.lightGray" p="5" fontSize="lg">
      <Heading size="md" py="3">
        Check Your New Address
      </Heading>
      <FormControl color="theme.dark">
        <FormLabel color="theme.light">Paste your new wallet address here:</FormLabel>
        <Input
          mb="3"
          bg="white"
          id="cardanoAddress"
          name="cardanoAddress"
          onChange={formik.handleChange}
          value={formik.values.cardanoAddress}
          placeholder="Preprod Address"
        />
        <FormHelperText py="2">Use any address - for now!</FormHelperText>
        <Button onClick={handleClick}>Check Address</Button>
        {addressUTxOs && (
          <Box bg="theme.light" color="theme.dark" mt="5" p="3" fontSize="sm">
            <pre>{JSON.stringify(addressUTxOs, null, 2)}</pre>
          </Box>
        )}
      </FormControl>
    </Box>
  );
};

export default CheckAddress;
