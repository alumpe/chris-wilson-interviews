import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { usePlayer } from "../../utils/usePlayer";

interface YoutubePlayerProps {
  className?: string;
}

const YoutubePlayerComponent = ({ className }: YoutubePlayerProps) => {
  const { player, videoId } = usePlayer();

  return (
    <YouTube containerClassName={className} videoId={videoId} ref={player} />
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
