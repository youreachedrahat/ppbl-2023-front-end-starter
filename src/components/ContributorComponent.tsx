import { Box, Text } from "@chakra-ui/react";
// import { CardanoWallet } from "@meshsdk/react";
import { useWallet } from "@meshsdk/react";
import { AssetExtended } from "@meshsdk/core";
import { useState } from "react";
import { Formik, Form } from 'formik';
import { Select, Button } from '@chakra-ui/react';


const PPBL2023TokenId = "05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056";


const tGimbalTokenId = "fb45417ab92a155da3b31a8928c873eb9fd36c62184c736f189d334c";

/**
 * This component checks for the presence of two specific kind of tokens, given by the two PolicyId's above
 * If present, it lists them by quantity and name.  
 * */



export const ContributorComponent = () => {

  const { wallet, connected } = useWallet();

  const [policyIdTokens, setPolicyIdTokens] = useState<AssetExtended[] | undefined>(undefined);


  /**
   * Given a list of tokens as AssetExtended[], 
   * we extract quantity and name for each of them, 
   * and render them in an <ul>  
   */


  function RenderTokenList(tl: AssetExtended[]) {
    return (
      <ul>
        {tl.map((asset, index) => (
          <li key={index}>
            {asset.quantity} {asset.assetName}
          </li>
        ))}
      </ul>
    );
  };

  /** TBD: add the tokens from different addresses to simplify display. */

  /** according to the Token selected,
   *  we use the appropriate policyId to filter the assets present in the wallet, 
   * and set the state variable 'policyIdTokens'. */


  const handleSelectedOption = async (policyId: string) => {
    try {
      const assets = await wallet.getAssets();
      if (assets) {
        const assetTokens = assets.filter(
          (a: AssetExtended) => (a.policyId === policyId)
        );
        setPolicyIdTokens(assetTokens);
      }
    } catch (error) {
      console.error('Error fetching wallet assets:', error);
    }
  };


  /** Use a Select form from Formik to input the Token option to query
   * Since policyId is a string, we set it up directly as a value when selecting the correspoding option
  */


  return (
    <Formik
      initialValues={{ option: "" }}
      onSubmit={(values) => { handleSelectedOption(values.option); }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Select
            name="option"
            value={formik.values.option}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select an option</option>
            <option value={PPBL2023TokenId}>PPBL 2023 Token</option>
            <option value={tGimbalTokenId}>Gimbalab Token</option>
          </Select>
          {formik.touched.option && formik.errors.option ? (
            <div>{formik.errors.option}</div>
          ) : null}
          <Button type="submit" bg="blue.300" mt="3">Check Token</Button>
          {(policyIdTokens && policyIdTokens.length > 0) ? (
            <Box bg="green.400" color="theme.dark" mt="5" p="3" fontSize="sm">
              Your wallet currently holds these tokens:
              {RenderTokenList(policyIdTokens)}
            </Box>
          ) : ((connected && policyIdTokens && policyIdTokens.length == 0) ? (
            <Box bg="red.400" color="theme.dark" mt="5" p="3" fontSize="sm">
              Your wallet does not hold a selected Token.
            </Box>) : null)
          }
        </Form>
      )}
    </Formik >
  );
};