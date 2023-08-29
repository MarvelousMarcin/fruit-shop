import { Product } from "../store/components/products/ProductSection";

export type BasketProduct = Product & {
  quantity: number;
};
