import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";

import Assignment1022 from "@/src/components/course-modules/102/Assignment1022.mdx";
import GetHelp from "@/src/components/lms/Course/GetHelp";
import MasteryAssignmentLayout from "@/src/components/lms/Lesson/MasteryAssignmentLayout";

export default function Assignment1022Page() {
  return (
    <MasteryAssignmentLayout nextButtonHref="/modules/102/1026" nextButtonTitle="Continue to Lesson 102.6">
      <Assignment1022 />
    </MasteryAssignmentLayout>
  );
}
