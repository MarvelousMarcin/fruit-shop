"use client";

import { useStore } from "@/app/store-global/store";
import { FC } from "react";

interface BlackBackgroundProps {}

const BlackBackground: FC<BlackBackgroundProps> = ({}) => {
  const { isMenuOpen } = useStore();

  return (
    <>
      {isMenuOpen && (
        <div className="fixed w-screen bg-black opacity-60 h-screen top-0 left-0 z-40"></div>
      )}
    </>
  );
};

export default BlackBackground;
