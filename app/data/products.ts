import { Product } from "../store/components/products/ProductSection";

export const recommendedProducts: Product[] = [
  { name: "Cariptoza", photo: "/assets/item1.png", price: 12 },
  { name: "Cariptoza", photo: "/assets/item2.png", price: 14 },
];

export const hottestProducts: Product[] = [
  {
    name: "Cariptoza",
    photo: "/assets/item3.png",
    price: 12,
    bgColor: "bg-yellow",
  },
  { name: "Saladas", photo: "/assets/item4.png", price: 14, bgColor: "bg-red" },
  {
    name: "Kiwikos",
    photo: "/assets/item5.png",
    price: 14,
    bgColor: "bg-green",
  },
];
