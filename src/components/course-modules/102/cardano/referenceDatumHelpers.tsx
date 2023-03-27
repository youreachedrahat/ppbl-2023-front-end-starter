import { hexToString } from "@/src/utils/index";
import { gql, GraphQLClient } from "graphql-request";
import { Data } from "@meshsdk/core";

const graphQLClient = new GraphQLClient("https://d.graphql-api.iohk-preprod.dandelion.link/", {
  headers: {
    "Content-Type": "application/json",
  },
});

export declare type ContributorReferenceDatum = {
  luckyNumber: number;
  completedModules: string[];
};

export type GraphQLInlineDatumValue = {
  fields: any[];
  constructor: number;
};

const GET_UTXO_DATUM = gql`
  query GetUTxODatum($contribAsset: Hex!) {
    utxos(where: { tokens: { asset: { assetId: { _eq: $contribAsset } } } }) {
      datum {
        bytes
        value
      }
    }
  }
`;

const formatContributorReferenceDatum = (refUTxODatum: GraphQLInlineDatumValue) => {
  const completedModulesList: string[] = [];

  if (refUTxODatum.fields[1].list.length > 0) {
    refUTxODatum.fields[1].list.map((module: { bytes: string }) => {
      completedModulesList.push(module.bytes);
    });
  }

  const _contributor: ContributorReferenceDatum = {
    luckyNumber: refUTxODatum.fields[0].int,
    completedModules: [],
  };

  return _contributor;
};

export const getContributorReferenceDatum = async (assetId: string): Promise<ContributorReferenceDatum> => {
  const variables = {
    contribAsset: assetId,
  };

  const results: any = await graphQLClient.request(GET_UTXO_DATUM, variables);
  const _datum_value = results.utxos[0].datum.value;
  const _formatted_datum = formatContributorReferenceDatum(_datum_value);

  return _formatted_datum;
};
