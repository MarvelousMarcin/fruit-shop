"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import Input from "./Input";
import { useRouter } from "next/navigation";
const NameScreen = () => {
  const router = useRouter();

  return (
    <motion.div className="w-full h-full flex flex-col justify-start absolute top-0 left-0">
      <div className=" h-[40%] w-full flex justify-center items-center">
        <Image
          src="/assets/granat.jpg"
          className="object-contain w-full h-full"
          alt="basket"
          width={300}
          height={300}
        />
      </div>
      <div className="grid grid-cols-6 mx-6 h-[40%] bg-white">
        <div className="col-span-8 md:col-span-4 lg:col-span-5 row-start-2 row-end-3 self-center">
          <h1 className="text-gray-main font-bold text-md">
            What’s your first name?
          </h1>
          <Input placeholder="Your name" className="w-full mt-2" />
        </div>
        <div className="row-start-3 row-end-3 col-span-7">
          <Button
            onClick={() => router.push("/store")}
            label="Start ordering"
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NameScreen;
