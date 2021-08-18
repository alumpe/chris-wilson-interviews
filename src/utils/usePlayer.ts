import { useStore } from "../store/useStore";

export const usePlayer = () => {
  const { player, videoId, setVideoId } = useStore();

  const seekTo = (seconds: number) => {
    player.current?.getInternalPlayer().seekTo(seconds, true);
    player.current?.getInternalPlayer().playVideo();
  };

  return { player, videoId, seekTo, setVideoId };
};
