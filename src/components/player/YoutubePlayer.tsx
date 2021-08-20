import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { useStore } from "../../store/useStore";
import BaeclastInterview from "../../interviews/baeclast.json";

interface YoutubePlayerProps {
  className?: string;
}

const YoutubePlayerComponent = ({ className }: YoutubePlayerProps) => {
  const { player, setVideoId } = useStore();

  return (
    <YouTube
      containerClassName={className}
      ref={player}
      onReady={() => setVideoId(BaeclastInterview.videoId)}
    />
  );
};

export const YoutubePlayer = styled(YoutubePlayerComponent)`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  align-self: center;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
