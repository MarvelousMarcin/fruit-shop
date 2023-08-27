"use client";
import { ShoppingBasket } from "lucide-react";

const ShopBasket = ({}) => {
  return (
    <div className="flex justify-center items-center h-fit flex-col">
      <ShoppingBasket size={25} className="text-orange-main" />
      <h2>my basket</h2>
    </div>
  );
};

export default ShopBasket;
