import { gql } from "@apollo/client";

export const TX_FROM_ADDRESS_WITH_POLICYID = gql`
  query TxFromAddressWithPolicyId($browserWalletAddress: String!, $tokenPolicyId: Hash28Hex!) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $browserWalletAddress } } }
          { inputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
          { outputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
        ]
      }
    ) {
      hash
      includedAt
      outputs {
        address
        tokens {
          asset {
            policyId
          }
        }
      }
    }
  }
`;

// Then use this query to confirm that the token has been returned from the CLI Wallet to the Browser Wallet:
export const TX_TO_ADDRESS_WITH_POLICYID = gql`
  query TxToAddressWithPolicyId(
    $cliWalletAddress: String!
    $browserWalletAddress: String!
    $tokenPolicyId: Hash28Hex!
  ) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $cliWalletAddress } } }
          { inputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
          { outputs: { address: { _eq: $browserWalletAddress } } }
          { outputs: { tokens: { asset: { policyId: { _eq: $tokenPolicyId } } } } }
        ]
      }
    ) {
      hash
    }
  }
`;

// Finally, when we know the CLI Wallet address, we check that it sent the Split UTxO Transaction to itself:
export const SPLIT_TX_FROM_CLI_ADDRESS = gql`
  query TxFromAddress($cliWalletAddress: String!) {
    transactions(
      where: {
        _and: [
          { inputs: { address: { _eq: $cliWalletAddress } } }
          { outputs: { address: { _eq: $cliWalletAddress } } }
        ]
      }
    ) {
      hash
      outputs {
        address
        value
      }
    }
  }
`;