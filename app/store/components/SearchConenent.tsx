"use client";

import {
  hottestProducts,
  onSale,
  recommendedProducts,
} from "@/app/data/products";
import { useStore } from "@/app/store-global/store";
import clsx from "clsx";
import { FC } from "react";
import Product from "./products/Product";

interface SearchConenentProps extends React.HTMLAttributes<HTMLDivElement> {}

const allProducts = [...recommendedProducts, ...hottestProducts, ...onSale];

const SearchConenent: FC<SearchConenentProps> = ({ className }) => {
  const { searchQuery } = useStore();

  return (
    <div className={clsx("", className)}>
      <div className="text-xl font-bold relative tracking-wider  flex items-center gap-9 px-6">
        What we found:
        <div className="absolute w-20 h-[5px] bg-orange-main -bottom-[2px]"></div>
      </div>
      <section className="mt-5 justify-self-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-6 gap-4">
        {allProducts
          .filter((product) => product.name.toLowerCase().includes(searchQuery))
          .map((prod) => (
            <Product
              key={Math.random()}
              name={prod.name}
              photo={prod.photo}
              price={prod.price}
            />
          ))}
      </section>
    </div>
  );
};

export default SearchConenent;
