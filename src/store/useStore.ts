import React, { useRef } from "react";
import YouTube from "react-youtube";
import create from "zustand";

interface PlayerState {
  player: React.RefObject<YouTube>;
  videoId?: string;
  setVideoId: (id: string) => void;
}

interface TabState {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const useStore = create<PlayerState & TabState>((set, get, api) => ({
  player: React.createRef<YouTube>(),
  videoId: "88N4s2qxRIM",
  setVideoId: (id: string) => set({ videoId: id }),

  activeTab: 0,
  setActiveTab: (tab: number) => set({ activeTab: tab }),
}));
