"use client";

import { FC } from "react";
import { AlignJustify } from "lucide-react";
import ShopBasket from "./ShopBasket";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="w-full flex justify-between row-span-1 col-span-8 py-9 h-28 items-center">
      <AlignJustify className="cursor-pointer" />
      <ShopBasket />
    </header>
  );
};

export default Header;
