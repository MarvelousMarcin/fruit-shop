import { Product } from "@/app/store/components/products/ProductSection";
import { BasketProduct } from "@/app/types/products";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface BasketProductProps {
  product: BasketProduct;
}

const BasketProduct: FC<BasketProductProps> = ({ product }) => {
  return (
    <div className="flex w-full md:w-3/4 justify-between mx-auto items-center max-h-20 mt-8 max-w-xl">
      <Image src={product.photo} alt="photo" width={130} height={130} />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{product.name}</h1>
        <p className="text-gray-special">{product.quantity} packs</p>
      </div>
      <div className="flex gap-4">
        <div className="font-bold text-xl">
          $ {product.price * product.quantity}
        </div>
        <X />
      </div>
    </div>
  );
};

export default BasketProduct;
