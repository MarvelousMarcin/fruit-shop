"use client";
import { useStore } from "@/app/store-global/store";
import { FC } from "react";
import BasketProduct from "./BasketProduct";

interface BasketContentProps {}

const BasketContent: FC<BasketContentProps> = ({}) => {
  const { basket } = useStore();
  return (
    <>
      <div className="w-screen h-fit flex flex-col justify-between px-6 gap-14">
        {basket.map((prod) => (
          <>
            <BasketProduct product={prod} />
            <div className="w-3/4 mx-auto h-[2px] bg-gray-light"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default BasketContent;
