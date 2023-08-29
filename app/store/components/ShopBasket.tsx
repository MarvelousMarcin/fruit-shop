"use client";
import { useStore } from "@/app/store-global/store";
import { ShoppingBasket } from "lucide-react";

const ShopBasket = ({}) => {
  const { basket } = useStore();
  const quant = basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <div className="flex justify-center items-center h-fit flex-col">
      <div className="relative">
        <ShoppingBasket size={25} className="text-orange-main" />

        <div className="absolute w-3 h-3 bg-white p-2 text-xs z-20 rounded-full -right-3 bottom-0 text-orange-main flex justify-center items-center">
          {quant}
        </div>
      </div>
      <h2>my basket</h2>
    </div>
  );
};

export default ShopBasket;
