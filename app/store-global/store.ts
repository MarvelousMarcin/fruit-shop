import { create } from "zustand";

type State = {
  isMenuOpen: boolean;
};

type Action = {
  switchMenu: () => void;
};

export const useStore = create<State & Action>()((set) => ({
  isMenuOpen: false,
  switchMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
