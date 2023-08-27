import React from "react";
import { FC } from "react";
import clsx from "clsx";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-orange-main text-white rounded-md h-1/2 font-bold text-md hover:bg-orange-300 transition-all",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
