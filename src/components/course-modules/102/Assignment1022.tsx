import Assignment1022 from "@/src/components/course-modules/102/Assignment1022.mdx";
import MasteryAssignmentLayout from "@/src/components/lms/Lesson/MasteryAssignmentLayout";
import ContributorLuckyNumber from "./cardano/ContributorLuckyNumber";

type Props = {
  masteryStatus: {
    ppblTokenName: string,
    cliWallet: string;
    successTx1: boolean;
    successTx2: boolean;
    luckyNumber: number,
  };
};

const Assignment1022Page: React.FC<Props> = ({ masteryStatus }) => {
  return (
    <MasteryAssignmentLayout nextButtonHref="/modules/102/1026" nextButtonTitle="Continue to Lesson 102.6">
      <Assignment1022 />
      <ContributorLuckyNumber masteryStatus={masteryStatus} />
    </MasteryAssignmentLayout>
  );
}

export default Assignment1022Page;
