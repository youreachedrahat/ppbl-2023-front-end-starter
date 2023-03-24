import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Asset, Data, KoiosProvider } from "@meshsdk/core";
import { useWallet, useAddress } from "@meshsdk/react";
import { useEffect, useState } from "react";
import { getContributorReferenceDatum } from "./referenceDatumHelpers";

export declare type ContributorReferenceDatum = {
  luckyNumber: number;
  completedModules: string[];
};

const ContributorLuckyNumber = () => {
  const { connected, wallet } = useWallet();

  const [connectedContributorToken, setConnectedContributorToken] = useState<Asset | undefined>(undefined);
  const [connectedContributorReferenceDatum, setConnectedContributorReferenceDatum] = useState<
    ContributorReferenceDatum | undefined
  >(undefined);

  // When wallet is connected, look for a PPBL2023 Token in connected wallet
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
        const _contributor =
          connectedContributorToken.unit.substring(0, 56) + "313030" + connectedContributorToken.unit.substring(62);
        const _contributorDatum = await getContributorReferenceDatum(_contributor);
        setConnectedContributorReferenceDatum(_contributorDatum);
      }
    };

    if (connectedContributorToken) {
      fetchContributorReferenceDatum();
    }
  }, [connectedContributorToken]);

  return (
    <Box my="3" p="3" bg="theme.green" color="theme.dark">
      <Text>What is your lucky number?</Text>
        {connected ? (
            <Text>
                {connectedContributorToken ? (
                    <Text>There is a PPBL2023 Token in the connected wallet.</Text>
                ) : (
                    <Text>There is no PPBL2023 Token in the connected wallet. If your PPBL2023 Token is currently in a CLI wallet, make sure to send it back to your browser wallet now.</Text>
                )}
                {connectedContributorReferenceDatum && (<Text>The lucky number for this PPBL2023 Token is {connectedContributorReferenceDatum.luckyNumber}</Text>)}
            </Text>
        ) : (
            <Text>Connect a wallet to see your lucky number</Text>
        )}
    </Box>
  );
};

export default ContributorLuckyNumber;
