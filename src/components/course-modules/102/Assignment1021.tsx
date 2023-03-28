import Assignment1021 from "@/src/components/course-modules/102/Assignment1021.mdx";
import MasteryAssignmentLayout from "@/src/components/lms/Lesson/MasteryAssignmentLayout";
import CheckAssociatedWallet from "./cardano/CheckAssociatedWallet";

type Props = {
  masteryStatus: {
    cliWallet: string;
    successTx1: boolean;
    successTx2: boolean;
  };
};

const Assignment1021Page: React.FC<Props> = ({ masteryStatus }) => {
  return (
    <MasteryAssignmentLayout nextButtonHref="/modules/102/1024" nextButtonTitle="Continue to Lesson 102.4">
      <Assignment1021 />
      <CheckAssociatedWallet masteryStatus={masteryStatus} />
    </MasteryAssignmentLayout>
  );
};

export default Assignment1021Page;
