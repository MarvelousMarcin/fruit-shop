"use client";
import clsx from "clsx";
import { Heart, PlusCircle } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

interface ProductProps {
  photo: string;
  name: string;
  price: number;
  bgColor?: string;
  lastElemRef?: any;
}

const Product: FC<ProductProps> = ({
  name,
  photo,
  price,
  bgColor = "bg-white",
  lastElemRef,
}) => {
  return (
    <div
      ref={lastElemRef}
      className={clsx(
        "w-48 h-48 rounded-lg shadow-special font-bold py-2 px-4 flex flex-col justify-end items-center relative shrink-0",
        bgColor
      )}
    >
      <Heart className="absolute top-2 right-2 text-orange-main" />
      <Image
        className="select-none"
        alt="item"
        src={photo}
        width={110}
        height={110}
      />
      <h1 className="text-md self-start mt-4">{name}</h1>
      <section className="flex justify-between w-full">
        <h2 className="text-orange-main">$ {price}</h2>
        <PlusCircle className="text-orange-main cursor-pointer" />
      </section>
    </div>
  );
};

export default Product;
