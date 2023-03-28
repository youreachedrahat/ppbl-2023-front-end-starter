import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { StatusBox } from "@/src/components/lms/Status/StatusBox";

type Props = {
  children?: React.ReactNode;
  masteryStatus: {
    cliWallet: string;
    successTx1: boolean;
    successTx2: boolean;
  };
};

const Status102: React.FC<Props> = ({ children, masteryStatus }) => {

  return (
    <Flex direction="row" justifyContent="center" alignItems="center">
      <StatusBox condition={masteryStatus.cliWallet.length > 0} text="102.1" />
      <StatusBox condition={masteryStatus.successTx1} text="102.2" />
      <StatusBox condition={masteryStatus.successTx2} text="102.3" />
      <StatusBox condition={false} text="102.4" />
      <StatusBox condition={false} text="102.5" />
      <StatusBox condition={false} text="102.6" />
    </Flex>
  );
};

export default Status102;
