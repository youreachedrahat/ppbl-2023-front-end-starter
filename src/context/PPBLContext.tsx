import { useAddress, useWallet } from "@meshsdk/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Heading, Center, Spinner } from "@chakra-ui/react";

import { projectAsset, treasury } from "gpte-config";
import { GraphQLUTxO } from "@/src/types/cardanoGraphQL";
import { TREASURY_UTXO_QUERY } from "@/src/data/queries/treasuryQueries";
import { Asset } from "@meshsdk/core";
import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { hexToString } from "@/src/utils";


interface CurrentPPBLContext {
    connectedContribToken: string | undefined
    treasuryUTxO: GraphQLUTxO | undefined
}

const initialContext: CurrentPPBLContext = {
    connectedContribToken: undefined,
    treasuryUTxO: undefined
}

const PPBLContext = createContext<CurrentPPBLContext>(initialContext);

// Make the Treasury Query

// When does it trigger?

// How can I trigger it from downstream?

type Props = {
  children?: React.ReactNode;
};

const PPBLContextProvider: React.FC<Props> = ({ children }) => {
  const [currentContext, setCurrentContext] = useState<CurrentPPBLContext>(initialContext)
  const [myMessage, setMyMessage] = useState("I am in my initial state!");
  const [currentTreasuryUTxO, setCurrentTreasuryUTxO] = useState<GraphQLUTxO | undefined>(undefined);

  const [connectedContributorToken, setConnectedContributorToken] = useState<Asset | undefined>(undefined);
  const [contribTokenName, setContribTokenName] = useState<string | undefined>(undefined);

  const { connected, wallet } = useWallet();
  const address = useAddress();

  const { data, loading, error } = useQuery(TREASURY_UTXO_QUERY, {
    variables: {
      contractAddress: treasury.address,
    },
  });

  useEffect(() => {
    if (address) {
      setMyMessage("I am in a new state!");
    }
  }, [address]);

  useEffect(() => {
    const newContext: CurrentPPBLContext = {
        connectedContribToken: contribTokenName,
        treasuryUTxO: currentTreasuryUTxO
    }
    setCurrentContext(newContext)
  }, [contribTokenName, currentTreasuryUTxO])

  useEffect(() => {
    if(data && data.utxos.length == 1) {
        setCurrentTreasuryUTxO(data.utxos[0])
    }
  }, [data])

  useEffect(() => {
    const fetchContributorToken = async () => {
      const _token = await wallet.getPolicyIdAssets(contributorTokenPolicyId);
      if (_token.length > 0) {
        setConnectedContributorToken(_token[0]);
      }
    };
    if (connected) {
      fetchContributorToken();
    }
  }, [connected]);

  useEffect(() => {
    const fetchContributorReferenceDatum = async () => {
      if (connectedContributorToken) {
        const _hexName = connectedContributorToken.unit.substring(62)
        const _tokenName = hexToString(_hexName)
        setContribTokenName(_tokenName)
      }
    };

    if (connectedContributorToken) {
      fetchContributorReferenceDatum();
    }
  }, [connectedContributorToken]);

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


  return <PPBLContext.Provider value={currentContext}>{children}</PPBLContext.Provider>;
};

export { PPBLContext, PPBLContextProvider };
