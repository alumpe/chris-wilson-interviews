import { useStore } from "../store/useStore";

export const usePlayer = () => {
  const { player, videoId, setVideoId } = useStore();

  const seekTo = (second: number) => {
    player.current?.getInternalPlayer().seekTo(second, true);
  };

  return { player, videoId, seekTo, setVideoId };
};
