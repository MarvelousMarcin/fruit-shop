import { create } from "zustand";
import { Product } from "../store/components/products/ProductSection";

type State = {
  isMenuOpen: boolean;
  isSearching: boolean;
  searchQuery: string;
  basket: Product[];
};

type Action = {
  switchMenu: () => void;
  setIsSearching: (value: boolean) => void;
  setSearchQuery: (value: string) => void;
  addProduct: (product: Product) => void;
};

export const useStore = create<State & Action>()((set) => ({
  isMenuOpen: false,
  isSearching: false,
  searchQuery: "",
  basket: [
    {
      id: "10",
      name: "Kiwikos",
      photo: "/assets/item8.png",
      price: 22,
      bgColor: "bg-blue-dark",
    },
    {
      id: "8",
      name: "Cariptoza",
      photo: "/assets/item6.png",
      price: 14,
      bgColor: "bg-blue-light",
    },
    {
      id: "9",
      name: "Saladas",
      photo: "/assets/item7.png",
      price: 33,
      bgColor: "bg-orange-light",
    },
  ],
  switchMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsSearching: (value) => set(() => ({ isSearching: value })),
  setSearchQuery: (value) => set(() => ({ searchQuery: value })),
  addProduct: (value) => set((state) => ({ basket: [...state.basket, value] })),
}));
