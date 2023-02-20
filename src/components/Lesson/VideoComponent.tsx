import { Box, Text, Heading } from "@chakra-ui/react";
import * as React from "react";

import { render } from "react-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
  children?: React.ReactNode;
  videoId: string;
};
const VideoComponent: React.FC<Props> = ({ children, videoId }) => {
  return (
    <Box borderLeft="2px" borderColor="theme.four" my="5" pl="5">
      <Heading size="md" py="3">{children}</Heading>
      <Box w="40%">
        <LiteYouTubeEmbed id="m2Uv6UWzjks" title="example video" />
      </Box>
    </Box>
  );
};

export default VideoComponent;
