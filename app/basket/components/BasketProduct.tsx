import { useStore } from "@/app/store-global/store";
import { Product } from "@/app/store/components/products/ProductSection";
import { BasketProduct } from "@/app/types/products";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
interface BasketProductProps {
  product: BasketProduct;
}

const BasketProduct: FC<BasketProductProps> = ({ product }) => {
  const { removeProduct } = useStore();

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
        <motion.div
          whileHover={{ color: "red", scale: 1.1 }}
          className="cursor-pointer"
        >
          <X onClick={() => removeProduct(product.id)} />
        </motion.div>
      </div>
    </div>
  );
};

export default BasketProduct;
