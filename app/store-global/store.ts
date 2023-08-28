import { create } from "zustand";

type State = {
  isMenuOpen: boolean;
  isSearching: boolean;
  searchQuery: string;
};

type Action = {
  switchMenu: () => void;
  setIsSearching: (value: boolean) => void;
  setSearchQuery: (value: string) => void;
};

export const useStore = create<State & Action>()((set) => ({
  isMenuOpen: false,
  isSearching: false,
  searchQuery: "",
  switchMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsSearching: (value) => set(() => ({ isSearching: value })),
  setSearchQuery: (value) => set(() => ({ searchQuery: value })),
}));
