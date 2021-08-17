import React, { useRef } from "react";
import YouTube from "react-youtube";
import create from "zustand";

interface PlayerState {
  player: React.RefObject<YouTube>;
  videoId?: string;
  setVideoId: (id: string) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  player: React.createRef<YouTube>(),
  videoId: "88N4s2qxRIM",
  setVideoId: (id: string) => set({ videoId: id }),
}));

export const usePlayer = () => {
  const { player, videoId, setVideoId } = usePlayerStore();

  const seekTo = (second: number) => {
    player.current?.getInternalPlayer().seekTo(second, true);
  };

  return { player, videoId, seekTo, setVideoId };
};
