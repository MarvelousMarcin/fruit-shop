import { Product } from "@/app/store/components/products/ProductSection";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface BasketProductProps {
  product: Product;
}

const BasketProduct: FC<BasketProductProps> = ({ product }) => {
  return (
    <div className="flex w-full md:w-3/4 justify-between mx-auto items-center mt-8 max-w-xl">
      <Image src={product.photo} alt="photo" width={130} height={130} />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{product.name}</h1>
        <p className="text-gray-special">2 packs</p>
      </div>
      <div className="flex gap-4">
        <div className="font-bold text-xl">$ {product.price}</div>
        <X />
      </div>
    </div>
  );
};

export default BasketProduct;
