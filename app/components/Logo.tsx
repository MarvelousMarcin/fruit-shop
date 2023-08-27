"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Logo = ({}) => {
  return (
    <motion.div
      animate={{ y: 10 }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
    >
      <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
    </motion.div>
  );
};

export default Logo;
