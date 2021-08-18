import React, { useRef } from "react";
import YouTube from "react-youtube";
import create from "zustand";
import { InterviewEntry } from "../components/tabs/QAndA";

interface PlayerState {
  player: React.RefObject<YouTube>;
  videoId?: string;
  setVideoId: (id: string) => void;
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
    videoId: "88N4s2qxRIM",
    setVideoId: (id: string) => set({ videoId: id }),

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
