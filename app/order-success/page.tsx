"use client";
import Image from "next/image";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <main className="w-screen h-[100vh] grid grid-cols-1">
      <div className="self-center justify-self-center flex flex-col gap-24">
        <section className="col-span-1  flex justify-center items-center flex-col gap-1 h-fit">
          <Image
            className="animate-pulse"
            src="/assets/success.png"
            alt="success"
            width={200}
            height={200}
          />
          <h1 className="text-3xl font-bold mt-4">Success!</h1>
          <p className="text-gray-special text-center">
            You order has been placed and it's being <br /> processed
          </p>
        </section>
        <section className="flex justify-center items-center flex-col gap-4">
          <button className="bg-orange-main text-white p-3 font-bold rounded-md border-orange-main border-2 h-fit">
            Order Status
          </button>
          <Link href="/store">
            <button className="border-orange-main border-2 p-3 rounded-md">
              Order Something else
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
