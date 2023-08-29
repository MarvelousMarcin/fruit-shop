"use client";
import { useStore } from "@/app/store-global/store";
import { Dispatch, FC, SetStateAction } from "react";
import BasketProduct from "./BasketProduct";
import { useRouter } from "next/navigation";

interface BasketContentProps {
  setIsCheckout: Dispatch<SetStateAction<boolean>>;
}

const BasketContent: FC<BasketContentProps> = ({ setIsCheckout }) => {
  const { basket } = useStore();
  const price = basket.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <>
      <div className="w-screen  h-fit flex flex-col justify-between px-6 gap-14 mb-36">
        {basket.map((prod) => (
          <>
            <BasketProduct product={prod} />
            <div className="w-3/4 mx-auto h-[2px] bg-gray-light"></div>
          </>
        ))}
      </div>
      <section className="h-36 w-screen bg-white  fixed bottom-0 left-0 px-5 md:px-20 flex justify-between items-center">
        <section>
          <h1 className="text-2xl text-orange-main font-bold">Total: </h1>
          <p className="text-xl fonrtt-bold">$ {price}</p>
        </section>
        <button
          onClick={() => setIsCheckout((prev) => !prev)}
          className="bg-orange-main w-56 text-white p-4 z-20 font-bold rounded-md tracking-wide"
        >
          Checkout
        </button>
      </section>
    </>
  );
};

export default BasketContent;
