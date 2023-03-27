import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";

import Assignment1021 from "@/src/components/course-modules/102/Assignment1021.mdx";
import GetHelp from "@/src/components/lms/Course/GetHelp";
import MasteryAssignmentLayout from "@/src/components/lms/Lesson/MasteryAssignmentLayout";

export default function Assignment1021Page() {
  return (
    <MasteryAssignmentLayout nextButtonHref="/modules/102/1024" nextButtonTitle="Continue to Lesson 102.4">
      <Assignment1021 />
    </MasteryAssignmentLayout>
  );
}
