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
  removeProduct: (id: string) => void;
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
  removeProduct: (id) =>
    set((state) => {
      const findItem = state.basket.find((prod) => prod.id === id);

      if (findItem?.quantity === 1) {
        const newBasket = state.basket.filter((prod) => prod.id !== id);
        return { basket: newBasket };
      } else {
        const newBasket = state.basket.map((prod) => {
          if (prod?.id == id) {
            return { ...prod, quantity: prod.quantity - 1 };
          }
          return prod;
        });
        return { basket: newBasket };
      }
    }),
}));
