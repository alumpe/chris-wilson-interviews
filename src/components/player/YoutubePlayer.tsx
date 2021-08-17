import React from "react";
import YouTube from "react-youtube";
import { usePlayer } from "../../utils/usePlayer";

export const YoutubePlayer = () => {
  const { player, videoId } = usePlayer();

  return <YouTube videoId={videoId} ref={player} />;
};
