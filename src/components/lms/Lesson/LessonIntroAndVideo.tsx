import { Box, Text, Heading, Grid, GridItem, Divider, Link as CLink, UnorderedList, ListItem } from "@chakra-ui/react";
import * as React from "react";
import VideoComponent from "./VideoComponent";

type Props = {
  lessonData: any;
};
const LessonIntroAndVideo: React.FC<Props> = ({ lessonData }) => {
  return (
    <>
      <Grid mx="auto" fontSize="lg" fontWeight="medium" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="95%" mx="auto">
          {lessonData.introduction.map((sentence: string, index: number) => (
            <Text key={index} py="3">
              {sentence}
            </Text>
          ))}
          {lessonData.links.length > 0 && (
            <Box mt="2" p="2" bg="theme.lightGray">
              <Heading pt="2" pb="1" size="md">
                LINKS
              </Heading>
              <UnorderedList>
                {lessonData.links.map((link: { linkText: string; url: string }, index: number) => (
                  <ListItem key={index} fontSize="md" py="1">
                    <CLink href={link.url} target="_blank">
                      {link.linkText}
                    </CLink>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          )}
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
