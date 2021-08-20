import React from "react";
import YouTube from "react-youtube";
import create from "zustand";
import { InterviewEntry } from "../components/tabs/QAndA";
import baeclastInterview from "../interviews/baeclast.json";

interface PlayerState {
  player: React.RefObject<YouTube>;
  videoId?: string;
  setVideoId: (id: string) => void;
  playVideoAt: (videoId: string, seconds: number) => void;
}

interface TabState {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

interface SearchState {
  searchTerm?: string;
  setSearchTerm: (term: string | undefined) => void;
  filterBySearch: (entries: InterviewEntry[]) => InterviewEntry[];
}

export const useStore = create<PlayerState & TabState & SearchState>(
  (set, get, api) => ({
    player: React.createRef<YouTube>(),
    videoId: undefined,
    setVideoId: (id: string) => {
      set({ videoId: id });
      get().player.current?.getInternalPlayer().loadVideoById(id);
    },
    playVideoAt: (videoId: string, seconds: number) => {
      const player = get().player;

      if (get().videoId !== videoId) {
        set({ videoId });
        player.current?.getInternalPlayer().loadVideoById(videoId, seconds);
      } else {
        player.current?.getInternalPlayer().seekTo(seconds, true);
        player.current?.getInternalPlayer().playVideo();
      }
    },

    activeTab: 0,
    setActiveTab: (tab: number) => set({ activeTab: tab }),

    searchTerm: undefined,
    setSearchTerm: (term) => set({ searchTerm: term }),
    filterBySearch: (entries: InterviewEntry[]) => {
      const currentTerm = get().searchTerm;
      return entries.filter(
        (entry) =>
          !currentTerm ||
          entry.question.toLowerCase().includes(currentTerm.toLowerCase())
      );
    },
  })
);
