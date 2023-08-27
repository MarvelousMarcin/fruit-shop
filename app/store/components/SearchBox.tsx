import clsx from "clsx";
import { Search } from "lucide-react";
import { FC } from "react";

interface SearchBoxProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchBox: FC<SearchBoxProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "text-[#86869E] flex flex-row gap-4 bg-[#F3F4F9] justify-start items-center rounded-xl px-4",
        className
      )}
    >
      <Search className="text-[#86869E]" />
      <input
        placeholder="Search for fruit salad combos"
        className=" text-[#86869E] bg-[#F3F4F9]  w-full h-12 rounded-xl text-sm outline-none"
      />
    </div>
  );
};

export default SearchBox;
