import clsx from "clsx";
import React, { FC } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(
        "bg-gray-light text-gray-dark px-4 h-12 rounded-xl outline-none",
        className
      )}
    />
  );
};

export default Input;
