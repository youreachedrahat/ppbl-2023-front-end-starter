import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { StatusBox } from "@/src/components/lms/Status/StatusBox";
import { Mastery102Context } from "@/src/pages/modules/102/[lesson]";

type Props = {
  children?: React.ReactNode;
};

const Status102: React.FC<Props> = ({ children }) => {
  const masteryStatus = React.useContext(Mastery102Context)

  return (
    <Flex direction="row" justifyContent="center" alignItems="center">
      <StatusBox condition={masteryStatus.successTx1} text="102.1: Use cardano-cli" />
      <StatusBox condition={masteryStatus.cliWallet.length > 0} text="102.2: Build an address" />
      <StatusBox condition={masteryStatus.successTx1 && masteryStatus.successTx2} text="102.3: Build transactions" />
      <StatusBox condition={masteryStatus.luckyNumber != 5} text="102.4: Lock to contract" />
      <StatusBox condition={masteryStatus.luckyNumber != 5} text="102.5: Unlock from contract" />
      <StatusBox condition={false} text="102.6: Shell scripts" />
    </Flex>
  );
};

export default Status102;
