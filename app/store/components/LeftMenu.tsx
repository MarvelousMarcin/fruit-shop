"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/app/store-global/store";
import { X } from "lucide-react";
interface LeftMenuProps {}

const LeftMenu: FC<LeftMenuProps> = ({}) => {
  const { isMenuOpen, switchMenu } = useStore();
  console.log(isMenuOpen);
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isMenuOpen ? "0" : "-100%", transition: { type: "tween" } }}
      className="w-3/4 md:w-1/3 fixed h-screen top-0 left-0 z-50 bg-white flex justify-center items-center"
    >
      <X
        className="top-10 left-10 z-50 absolute cursor-pointer"
        onClick={() => switchMenu()}
      />
      <section>
        <ul className="text-xl font-bold gap-5 flex-col flex col-span-1 justify-self-center h-fit mb-28">
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1, opacity: 0.3, x: 10 }}
          >
            All products
          </motion.li>
          <motion.li
            whileHover={{ scale: 1, opacity: 0.3, x: 10 }}
            className="cursor-pointer"
          >
            Sales
          </motion.li>
          <motion.li
            whileHover={{ scale: 1, opacity: 0.3, x: 10 }}
            className="cursor-pointer"
          >
            Delivery zone
          </motion.li>
        </ul>
        <ul className="text-md  gap-3 flex-col flex col-span-1 justify-self-center h-fit">
          <div className="w-32 self-start h-[1px] bg-black"></div>
          <motion.li className="cursor-pointer ">About us</motion.li>
          <motion.li className="cursor-pointer">Contact</motion.li>
          <motion.li className="cursor-pointer">Delivery Zone</motion.li>
        </ul>
      </section>
    </motion.div>
  );
};

export default LeftMenu;
