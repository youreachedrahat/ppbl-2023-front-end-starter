import { Box, Button, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import { CardanoWallet, useAddress, useWallet } from "@meshsdk/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { escrowAddress, escrowReferenceUTxO, projectAsset, contributorPolicyID, issuerPolicyID, metadataKey } from "gpte-config";
import { gql, useQuery } from "@apollo/client";
import { CONTRIBUTOR_TOKEN_QUERY } from "@/queries/contributorQueries";
import { Asset, Transaction, UTxO } from "@meshsdk/core";
import { GraphQLToDatum, hexToString } from "@/utils";
import { GraphQLInputUTxO, GraphQLToken, GraphQLUTxO, ProjectTxMetadata } from "@/types";
import DistributeTx from "@/components/gpte/transactions/DistributeTx";

const ESCROW_QUERY = gql`
  query UtxosAtEscrowAddress($address: String!) {
    utxos(where: { address: { _eq: $address } }) {
      txHash
    }
  }
`;

export default function DistributePage(txHash: string) {
  const { connected, wallet } = useWallet();
  const connectedAddress = useAddress();
  const [assets, setAssets] = useState<null | any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const { data, loading, error } = useQuery(ESCROW_QUERY, {
    variables: {
      address: escrowAddress,
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
        <title>GPTE Starter Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading>Distribute Commitment</Heading>
        <Box>
          {data.utxos.map((utxo: any) => (
            <Box key={utxo.txHash}>
              <DistributeTx txHash={utxo.txHash} />
            </Box>
          ))}
          {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
          {/* { getFirstNonMatchingAddress(data.utxos[0].transaction.inputs) } */}
        </Box>
      </Box>
    </>
  );
}