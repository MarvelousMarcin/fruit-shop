import clsx from "clsx";
import { Filter, Search } from "lucide-react";
import { FC } from "react";

interface SearchBoxProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchBox: FC<SearchBoxProps> = ({ className }) => {
  return (
    <section className={clsx(className, "flex w-full items-center px-6")}>
      <div
        className={clsx(
          "text-[#86869E] flex-grow flex flex-row gap-4 bg-[#F3F4F9] justify-start items-center rounded-xl px-4"
        )}
      >
        <Search className="text-[#86869E]" />
        <input
          placeholder="Search for fruit salad combos"
          className=" text-[#86869E] bg-[#F3F4F9]  w-full h-12 rounded-xl text-sm outline-none"
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-sliders-horizontal ml-3"
      >
        <line x1="21" x2="14" y1="4" y2="4" />
        <line x1="10" x2="3" y1="4" y2="4" />
        <line x1="21" x2="12" y1="12" y2="12" />
        <line x1="8" x2="3" y1="12" y2="12" />
        <line x1="21" x2="16" y1="20" y2="20" />
        <line x1="12" x2="3" y1="20" y2="20" />
        <line x1="14" x2="14" y1="2" y2="6" />
        <line x1="8" x2="8" y1="10" y2="14" />
        <line x1="16" x2="16" y1="18" y2="22" />
      </svg>
    </section>
  );
};

export default SearchBox;
