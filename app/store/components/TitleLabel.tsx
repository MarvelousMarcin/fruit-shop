"use client";
import { motion } from "framer-motion";
import { useStore } from "@/app/store-global/store";

const TitleLabel = ({}) => {
  const { isSearching } = useStore();

  return (
    <motion.div
      animate={{ opacity: isSearching ? 0 : 1 }}
      className="row-start-2 px-6 row-end-2 col-span-8 h-fit tracking-wide"
    >
      <h1 className="text-gray-main">
        Hello Marcin,
        <span className="font-bold">
          What food <br />
          salad do you want today?
        </span>
      </h1>
    </motion.div>
  );
};

export default TitleLabel;
