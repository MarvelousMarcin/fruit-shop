import { Product } from "../store/components/products/ProductSection";

export const recommendedProducts: Product[] = [
  { id: "1", name: "Cariptoza", photo: "/assets/item1.png", price: 12 },
  { id: "2", name: "Cariptoza", photo: "/assets/item2.png", price: 14 },
  { id: "3", name: "Kiwikos", photo: "/assets/item8.png", price: 22 },
  { id: "4", name: "Cariptoza", photo: "/assets/item6.png", price: 14 },
];

export const hottestProducts: Product[] = [
  {
    id: "5",
    name: "Cariptoza",
    photo: "/assets/item3.png",
    price: 12,
    bgColor: "bg-yellow",
  },
  {
    id: "6",
    name: "Saladas",
    photo: "/assets/item4.png",
    price: 14,
    bgColor: "bg-red",
  },
  {
    id: "7",
    name: "Kiwikos",
    photo: "/assets/item5.png",
    price: 14,
    bgColor: "bg-green",
  },
];

export const onSale: Product[] = [
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
  {
    id: "10",
    name: "Kiwikos",
    photo: "/assets/item8.png",
    price: 22,
    bgColor: "bg-blue-dark",
  },
  {
    id: "11",
    name: "Kiwikos",
    photo: "/assets/item5.png",
    price: 14,
    bgColor: "bg-yellow",
  },
];
