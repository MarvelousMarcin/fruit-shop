"use client";

import { ArrowBigLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import BasketContent from "./components/BasketContent";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
export default function Basket() {
  const router = useRouter();
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <main className="w-screen h-screen relative">
      {isCheckout && (
        <div
          onClick={() => setIsCheckout(false)}
          className="fixed w-screen bg-black  opacity-40 h-screen top-0 left-0 "
        ></div>
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isCheckout ? 0 : "100%", transition: { type: "tween" } }}
        className="fixed -bottom-5 left-0 bg-white z-40 h-[48vh] w-screen rounded-3xl flex justify-center items-center"
      >
        <motion.div
          onClick={() => setIsCheckout(false)}
          whileHover={{ scale: 0.9 }}
          initial={{ y: "100%" }}
          animate={{
            y: isCheckout ? 0 : "100%",
            transition: { type: "tween" },
          }}
          className="absolute -top-20 w-14 h-14 bg-white z-30 rounded-full flex justify-center items-center cursor-pointer"
        >
          <X size={40} />
        </motion.div>
        <div className="w-8/12 mx-auto flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-md">What’s your address?</h1>
            <Input placeholder="" className="w-full mt-2 text-gray-special" />
          </div>
          <div>
            <h1 className="font-bold text-md">What’s your phone number?</h1>
            <Input placeholder="" className="w-full mt-2 text-gray-special" />
          </div>
          <button
            onClick={() => router.push("/order-success")}
            className="bg-orange-main p-2 text-white rounded-md py-4 font-bold"
          >
            Order
          </button>
        </div>
      </motion.div>
      <div className="w-full h-28 flex justify-center items-center relative ">
        <button
          onClick={() => router.push("/store")}
          className="bg-white text-gray-main rounded-xl font-bold px-2 py-1 absolute left-3 md:left-10 flex gap-1 items-center justify-center"
        >
          <ArrowBigLeft />
          Go Back
        </button>
        <h1 className="text-xl text-gray-main font-bold">Basket</h1>
      </div>
      <BasketContent setIsCheckout={setIsCheckout} />
    </main>
  );
}
