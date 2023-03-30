import { createContext, useState, useEffect } from "react";
import { useWallet, useAddress } from "@meshsdk/react";

import SLTs102 from "@/src/components/course-modules/102/102-SLTs";
import Assignment1021 from "@/src/components/course-modules/102/Assignment1021";
import Assignment1022 from "@/src/components/course-modules/102/Assignment1022";
import Lesson1021 from "@/src/components/course-modules/102/Lesson-1021";
import Lesson1022 from "@/src/components/course-modules/102/Lesson-1022";
import Lesson1023 from "@/src/components/course-modules/102/Lesson-1023";
import Lesson1024 from "@/src/components/course-modules/102/Lesson-1024";
import Lesson1025 from "@/src/components/course-modules/102/Lesson-1025";
import Lesson1026 from "@/src/components/course-modules/102/Lesson-1026";
import Status102 from "@/src/components/course-modules/102/Status102";
import Summary102 from "@/src/components/course-modules/102/Summary102";
import ModuleLessons from "@/src/components/lms/Lesson/Lesson";
import slt from "@/src/data/slts-english.json";
import { contributorTokenPolicyId } from "@/src/cardano/plutus/contributorPlutusMintingScript";
import { useLazyQuery } from "@apollo/client";
import {
  SPLIT_TX_FROM_CLI_ADDRESS,
  TX_FROM_ADDRESS_WITH_POLICYID,
  TX_TO_ADDRESS_WITH_POLICYID,
} from "@/src/components/course-modules/102/queries";
import { Asset } from "@meshsdk/core";
import {
  ContributorReferenceDatum,
  getContributorReferenceDatum,
} from "@/src/components/course-modules/102/cardano/referenceDatumHelpers";
import { hexToString } from "@/src/utils";

export const Mastery102Context = createContext({
  ppblTokenName: "",
  cliWallet: "",
  successTx1: false,
  successTx2: false,
  luckyNumber: 5,
});

const Module102Lessons = () => {
  const moduleSelected = slt.modules.find((m) => m.number === 102);
  const { connected, wallet } = useWallet();
  const address = useAddress();

  const [mastery, setMastery] = useState({
    ppblTokenName: "",
    cliWallet: "",
    successTx1: false,
    successTx2: false,
    luckyNumber: 5,
  });

  const [cliAddress, setCliAddress] = useState<string | undefined>(undefined);
  const [contributorTokenSentBackToBrowserWallet, setContributorTokenSentBackToBrowserWallet] = useState(false);
  const [cliAddressHasSplitTx, setCliAddressHasSplitTx] = useState(false);

  const [connectedContributorToken, setConnectedContributorToken] = useState<Asset | undefined>(undefined);
  const [connectedContributorReferenceDatum, setConnectedContributorReferenceDatum] = useState<
    ContributorReferenceDatum | undefined
  >(undefined);

  const [contribTokenName, setContribTokenName] = useState("");
  const [contribLuckyNumber, setContribLuckyNumber] = useState(5);

// ------------------------------------------------------------------------------
  //
  // Mastery Assignment #1
  //
  // ------------------------------------------------------------------------------

  const [getQuery1, { loading: loadingQuery1, error: errorQuery1, data: dataQuery1 }] =
    useLazyQuery(TX_FROM_ADDRESS_WITH_POLICYID);
  const [getQuery2, { loading: loadingQuery2, error: errorQuery2, data: dataQuery2 }] =
    useLazyQuery(TX_TO_ADDRESS_WITH_POLICYID);
  const [getQuery3, { loading: loadingQuery3, error: errorQuery3, data: dataQuery3 }] =
    useLazyQuery(SPLIT_TX_FROM_CLI_ADDRESS);

  useEffect(() => {
    if (address) {
      getQuery1({
        variables: {
          browserWalletAddress: address,
          tokenPolicyId: contributorTokenPolicyId,
        },
      });
    }
  }, [address]);

  // If we have dataQuery1, we can look at the outputs of that transaction, and set our CLI Address
  useEffect(() => {
    if (dataQuery1 && dataQuery1.transactions.length > 0) {
      // we may want to order the transactions from most recent - there are options here
      // After this works, refactor with Types
      const _contributorOutput = dataQuery1.transactions[0].outputs.find(
        (output: any) => output.tokens[0]?.asset.policyId == contributorTokenPolicyId
      );
      if (_contributorOutput){
        const _cliAddress = _contributorOutput.address;
        setCliAddress(_cliAddress);
      }
    }
  }, [dataQuery1]);

  // If a CLI Address is found, run the TX_TO_ADDRESS_WITH_POLICYID and SPLIT_TX_FROM_CLI_ADDRESS queries
  useEffect(() => {
    if (cliAddress) {
      getQuery2({
        variables: {
          cliWalletAddress: cliAddress,
          browserWalletAddress: address,
          tokenPolicyId: contributorTokenPolicyId,
        },
      });
      getQuery3({
        variables: {
          cliWalletAddress: cliAddress,
        },
      });

      const _mastery = {
        ppblTokenName: contribTokenName,
        cliWallet: cliAddress,
        successTx1: cliAddressHasSplitTx,
        successTx2: contributorTokenSentBackToBrowserWallet,
        luckyNumber: contribLuckyNumber,
      };

      setMastery(_mastery);
    }
  }, [cliAddress]);

  // Was the Contributor Token sent back to the Browser Wallet?
  useEffect(() => {
    if (dataQuery2 && dataQuery2.transactions.length > 0 && cliAddress) {
      setContributorTokenSentBackToBrowserWallet(true);

      const _mastery = {
        ppblTokenName: contribTokenName,
        cliWallet: cliAddress,
        successTx1: cliAddressHasSplitTx,
        successTx2: true,
        luckyNumber: contribLuckyNumber,
      };

      setMastery(_mastery);
    }
  }, [dataQuery2]);

  // And if so, did the cli wallet make the split tx?
  useEffect(() => {
    if (dataQuery3 && dataQuery3.transactions.length > 0 && cliAddress) {
      const _hasThreeOutputs = dataQuery3.transactions.filter((tx: any) => tx.outputs.length >= 3);
      _hasThreeOutputs.forEach((tx: any) => {
        const _ten = tx.outputs.find((output: any) => output.address == cliAddress && output.value == 10000000);
        const _fifteen = tx.outputs.find((output: any) => output.address == cliAddress && output.value == 15000000);
        const _twentyfive = tx.outputs.find((output: any) => output.address == cliAddress && output.value == 25000000);
        setCliAddressHasSplitTx(_ten && _fifteen && _twentyfive);

        const _mastery = {
          ppblTokenName: contribTokenName,
          cliWallet: cliAddress,
          successTx1: _ten && _fifteen && _twentyfive,
          successTx2: contributorTokenSentBackToBrowserWallet,
          luckyNumber: contribLuckyNumber,
        };

        setMastery(_mastery);
      });
    }
  }, [dataQuery3]);

  // ------------------------------------------------------------------------------
  //
  // Mastery Assignment #2
  //
  // ------------------------------------------------------------------------------

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
        const _hexName = connectedContributorToken.unit.substring(62)
        const _tokenName = hexToString(_hexName)
        const _contributor =
          connectedContributorToken.unit.substring(0, 56) + "313030" + _hexName;
        const _contributorDatum = await getContributorReferenceDatum(_contributor);
        setConnectedContributorReferenceDatum(_contributorDatum);
        setContribTokenName(_tokenName)
      }
    };

    if (connectedContributorToken) {
      fetchContributorReferenceDatum();
    }
  }, [connectedContributorToken]);

  useEffect(() => {
    if (connectedContributorReferenceDatum) {
      setContribLuckyNumber(connectedContributorReferenceDatum.luckyNumber)
    }
  }, [connectedContributorReferenceDatum]);

  useEffect(() => {
    if (cliAddress) {
      const _mastery = {
        ppblTokenName: contribTokenName,
        cliWallet: cliAddress,
        successTx1: cliAddressHasSplitTx,
        successTx2: contributorTokenSentBackToBrowserWallet,
        luckyNumber: contribLuckyNumber,
      };
      setMastery(_mastery)
    } else {
      const _mastery = {
        ppblTokenName: contribTokenName,
        cliWallet: "",
        successTx1: cliAddressHasSplitTx,
        successTx2: contributorTokenSentBackToBrowserWallet,
        luckyNumber: contribLuckyNumber,
      };
      setMastery(_mastery)
    }

  }, [contribLuckyNumber, contribTokenName])

  // If we import all mastery checks here, then they can be passed down to components:
  // 1. Status bar
  // 2. Mastery Assignments
  // Check once and provide state.

  // Sidebar items are generated from module.lessons i.e. from the JSON file
  // Here we simply set the contents by matching the slug and key
  const lessons = [
    { key: "slts", component: <SLTs102 /> },
    { key: "1021", component: <Lesson1021 /> },
    { key: "1022", component: <Lesson1022 /> },
    { key: "1023", component: <Lesson1023 /> },
    { key: "1024", component: <Lesson1024 /> },
    { key: "1025", component: <Lesson1025 /> },
    { key: "1026", component: <Lesson1026 /> },
    { key: "assignment1021", component: <Assignment1021 masteryStatus={mastery} /> },
    { key: "assignment1022", component: <Assignment1022 masteryStatus={mastery} /> },
    { key: "summary", component: <Summary102 /> },
  ];

  return (
    <Mastery102Context.Provider value={mastery}>
      <ModuleLessons
        items={moduleSelected?.lessons ?? []}
        modulePath="/modules/102"
        selected={0}
        lessons={lessons}
        status={<Status102 />}
      />
    </Mastery102Context.Provider>
  );
};

export default Module102Lessons;
