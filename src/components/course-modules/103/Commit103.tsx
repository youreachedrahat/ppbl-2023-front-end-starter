import { Container, Divider, Box, Button, Spacer, Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useState } from "react";

import CommitLayout from "@/src/components/lms/Lesson/CommitLayout";
import CommitmentTx from "@/src/components/gpte/transactions/CommitmentTx";
import Commit from "@/src/components/course-modules/103/Commit.mdx";
import { PPBLContext } from "@/src/context/PPBLContext";
import { hexToString } from "@/src/utils";

const Commit103 = () => {
  const [selectedProject, setSelectedProject] = useState("");

  const ppblContext = useContext(PPBLContext);

  const handleChooseProject = (project: string) => {
    setSelectedProject(project);
  };

  return (
    <CommitLayout>
      <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)" gap={5}>
        <GridItem colSpan={[5, 5, 5, 5, 5, 3]} rowSpan={2}>
          <Commit />
        </GridItem>
        <GridItem colSpan={[5, 5, 5, 5, 5, 2]} border="1px" borderColor="theme.yellow" borderRadius="md" p="3">
          <Heading size="lg" fontWeight="200">
            Commit to Module 103
          </Heading>
          {ppblContext.connectedContribToken && (
            <Text pb="3" fontWeight="bold" color="theme.yellow">
              Connected PPBL 2023 Token: {ppblContext.connectedContribToken}
            </Text>
          )}
          <Box mb="3" p="3" bg="theme.yellow" color="theme.dark">
            <Text>
              You can Commit to Module 103 in one of two ways. You can complete the assigment in Lesson
              103.1, or you can skip it. If you do not complete Lesson 103.1, you can still see how GPTE works by choosing &quot;Module103 no GitLab&quot;.
            </Text>
          </Box>
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} gap="5">
            {ppblContext.treasuryUTxO &&
              ppblContext.treasuryUTxO.datum?.value.fields[0].list.map((d: any) => (
                <Button key={null} colorScheme="green" onClick={() => handleChooseProject(hexToString(d.bytes))}>
                  {hexToString(d.bytes)}
                </Button>
              ))}
          </Grid>
          <Box my="5">
            {selectedProject && ppblContext.treasuryUTxO && <CommitmentTx selectedProject={selectedProject} />}
          </Box>
        </GridItem>
      </Grid>
    </CommitLayout>
  );
};

export default Commit103;
