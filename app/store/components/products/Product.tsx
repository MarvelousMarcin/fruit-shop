"use client";
import clsx from "clsx";
import { Heart, PlusCircle } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/app/store-global/store";

interface ProductProps {
  photo: string;
  name: string;
  price: number;
  bgColor?: string;
  lastElemRef?: any;
  id: string;
}

const Product: FC<ProductProps> = ({
  name,
  photo,
  price,
  id,
  bgColor = "bg-white",
  lastElemRef,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addProduct } = useStore();
  return (
    <motion.div
      animate={{ size: [0.94, 1] }}
      key={Math.random()}
      ref={lastElemRef}
      className={clsx(
        "justify-self-center	 w-48 h-48 rounded-lg shadow-special font-bold py-2 px-4 flex flex-col justify-end items-center relative shrink-0",
        bgColor
      )}
    >
      <motion.div
        className="absolute top-2 right-2 text-orange-main cursor-pointer"
        whileTap={{ scale: 1.4 }}
      >
        <Heart
          onClick={() => setIsLiked((prevLiked) => !prevLiked)}
          className={clsx(isLiked && "fill-orange-main")}
        />
      </motion.div>
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
        <PlusCircle
          onClick={() => {
            addProduct({ photo, price, id, name });
          }}
          className="text-orange-main cursor-pointer"
        />
      </section>
    </motion.div>
  );
};

export default Product;
