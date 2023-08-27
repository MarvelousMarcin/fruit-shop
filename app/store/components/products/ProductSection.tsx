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
}

const ProductSection: FC<ProductSectionProps> = ({
  title,
  className,
  products,
}) => {
  const ref = useRef(null);
  const [wid, setWid] = useState(120);

  useEffect(() => {
    console.log(ref.current?.scrollWidth);
    console.log("client: " + ref.current?.clientWidth);
    console.log("offsetWid: " + ref.current?.offsetWidth);
    const boxWidth = 192 * products.length + 32 * (products.length - 1);
    if (ref.current?.clientWidth > boxWidth) setWid(0);
    else setWid(boxWidth - ref.current?.clientWidth);
    //console.log(wid);
    //if (ref.current) setWid(ref.current?.scrollWidth + 40);
  }, [ref]);

  return (
    <div className={clsx("", className)}>
      <div className="text-xl font-bold relative tracking-wider">
        {title}
        <div className="absolute w-20 h-[5px] bg-orange-main -bottom-[2px]"></div>
      </div>
      <section className="mt-5 overflow-y-visible w-full flex justify-start relative">
        <div className="flex gap-8 w-full overflow-x-hidden" ref={ref}>
          <motion.div
            dragConstraints={{
              left: -wid,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            drag="x"
            className="flex gap-8"
          >
            {products.map((product, index) => (
              <Product
                name={product.name}
                photo={product.photo}
                price={product.price}
                bgColor={product.bgColor}
                lastElemRef={index === products.length - 1 ? ref : null}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
