"use client";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const IntroScreen = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col justify-start absolute top-0 left-0">
      <div className=" h-[40%] w-full flex justify-center items-center">
        <Image
          src="/assets/malina.jpg"
          className="object-contain w-full h-full"
          alt="basket"
          width={300}
          height={300}
        />
      </div>
      <div className="grid grid-cols-6  mx-6 h-[40%]">
        <div className="col-span-8 md:col-span-4 lg:col-span-5 row-start-2 row-end-3 self-center">
          <h1 className="text-gray-main font-bold text-md">
            Get yourself something delicious
          </h1>
          <p className="text-gray-dark text-md leading-4 mt-1">
            We deliver the best and freshest fruit salad in town. Order for a
            combo today!!!
          </p>
        </div>
        <div className="row-start-3 row-end-3 col-span-7">
          <Button
            onClick={() => router.push("/name-page")}
            label="Let's continue"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
