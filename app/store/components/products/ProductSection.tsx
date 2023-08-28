"use client";
import { FC, useEffect, useRef, useState } from "react";
import Product from "./Product";
import clsx from "clsx";
import { motion } from "framer-motion";
export type Product = {
  name: string;
  photo: string;
  price: number;
  bgColor?: string;
};

interface ProductSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  products: Product[];
  additionalHeaders?: boolean;
}

const ProductSection: FC<ProductSectionProps> = ({
  title,
  className,
  products,
  additionalHeaders = false,
}) => {
  const ref = useRef(null);

  return (
    <div className={clsx("", className)}>
      <div className="text-xl font-bold relative tracking-wider flex items-center gap-9 px-6">
        {title}{" "}
        {additionalHeaders && (
          <>
            <div className="text-gray-special text-base font-normal">
              Popular
            </div>
            <div className="text-gray-special text-base font-normal">Fit</div>
          </>
        )}
        <div className="absolute w-20 h-[5px] bg-orange-main -bottom-[2px]"></div>
      </div>
      <section className="mt-5 w-full flex justify-start relative pl-6 h-full">
        <div className="flex gap-8 w-full overflow-x-hidden h-full " ref={ref}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -400, right: 0 }}
            className="flex gap-8"
          >
            {products.map((product) => (
              <Product
                name={product.name}
                photo={product.photo}
                price={product.price}
                bgColor={product.bgColor}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
