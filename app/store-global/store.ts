import { create } from "zustand";
import { Product } from "../store/components/products/ProductSection";
import { BasketProduct } from "../types/products";

type State = {
  isMenuOpen: boolean;
  isSearching: boolean;
  searchQuery: string;
  basket: BasketProduct[];
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
  basket: [],
  switchMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsSearching: (value) => set(() => ({ isSearching: value })),
  setSearchQuery: (value) => set(() => ({ searchQuery: value })),
  addProduct: (value) =>
    set((state) => {
      const itemExisis = state.basket.find((prod) => prod.id === value.id);
      const newBasket = state.basket.map((item) => {
        if (item.id === itemExisis?.id)
          return { ...itemExisis, quantity: itemExisis.quantity + 1 };
        else return item;
      });
      if (!itemExisis)
        return { basket: [...state.basket, { ...value, quantity: 1 }] };
      else {
        return {
          basket: newBasket,
        };
      }
    }),
}));
