"use client";

import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BasketContent from "./components/BasketContent";
export default function Basket() {
  const router = useRouter();

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-28 flex justify-center items-center relative ">
        <button
          onClick={() => router.push("/store")}
          className="bg-white text-gray-main rounded-xl font-bold px-2 py-1 absolute left-10 flex gap-1 items-center justify-center"
        >
          <ArrowBigLeft />
          Go Back
        </button>
        <h1 className="text-xl text-gray-main font-bold">Basket</h1>
      </div>
      <BasketContent />
    </main>
  );
}
