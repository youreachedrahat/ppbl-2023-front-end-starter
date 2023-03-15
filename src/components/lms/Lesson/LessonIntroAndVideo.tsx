import { Box, Text, Heading, Grid, GridItem, Divider } from "@chakra-ui/react";
import * as React from "react";
import VideoComponent from "./VideoComponent";

type Props = {
  lessonData: any
};
const LessonIntroAndVideo: React.FC<Props> = ({ lessonData }) => {
  return (
    <>
      <Grid mx="auto" fontSize="lg" fontWeight="bold" lineHeight="200%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="90%" mx="auto">
          {lessonData.introduction.map((sentence: string, index: number) => (
            <Text key={index} py="3">{sentence}</Text>
          ))}
        </GridItem>
        <GridItem>
          <VideoComponent videoId={lessonData.youtubeId}>{lessonData.videoHeading}</VideoComponent>
        </GridItem>
      </Grid>
      <Divider py="5" />
    </>
  );
};

export default LessonIntroAndVideo;
