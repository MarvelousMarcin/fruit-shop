"use client";

import { FC } from "react";
import { AlignJustify } from "lucide-react";
import ShopBasket from "./ShopBasket";
import { useStore } from "@/app/store-global/store";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { switchMenu } = useStore();
  return (
    <header className="w-full px-6 flex justify-between row-span-1 col-span-8 py-9 h-28 items-center">
      <AlignJustify onClick={() => switchMenu()} className="cursor-pointer" />
      <ShopBasket />
    </header>
  );
};

export default Header;
