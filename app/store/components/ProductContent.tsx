"use client";

import { FC } from "react";
import ProductSection from "./products/ProductSection";
import {
  hottestProducts,
  onSale,
  recommendedProducts,
} from "@/app/data/products";
import { useStore } from "@/app/store-global/store";
import SearchConenent from "./SearchConenent";

interface ProductContentProps {}

const ProductContent: FC<ProductContentProps> = ({}) => {
  const { isSearching } = useStore();

  return (
    <>
      {!isSearching && (
        <>
          {" "}
          <ProductSection
            className="col-span-8 mt-11"
            title="Recommended staff"
            products={recommendedProducts}
          />
          <ProductSection
            className="col-span-8 mt-11"
            title="Hottest"
            additionalHeaders={true}
            products={hottestProducts}
          />
          <ProductSection
            className="col-span-8 mt-11"
            title="On Sale"
            products={onSale}
          />
        </>
      )}
      {isSearching && <SearchConenent className="col-span-8 " />}
    </>
  );
};

export default ProductContent;
