"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Checkout({ children }: { children: React.ReactNode }) {

  return (
    <section className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 place-items-center gap-10">
      <h1 className=" text-3xl font-extrabold mt-5 col-span-full">Checkout</h1>
      <div className="col-span-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-rows-2 gap-y-12 xl:grid-rows-1 justify-center">
        {children}
      </div>


      <div className="col-span-full flex flex-col gap-8 items-center mb-8">
        <h1 className=" text-3xl font-extrabold mt-5">Explore assets</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex-row flex-wrap gap-4 ">
          <Image
            src="/images/photo-1691434864891-859ea2f60365.webp"
            height="300"
            width="300"
            alt="dummy"
          />

          <Image
            src="/images/photo-1691434864891-859ea2f60365.webp"
            height="300"
            width="300"
            alt="dummy"
          />
          <Image
            src="/images/photo-1691434864891-859ea2f60365.webp"
            height="300"
            width="300"
            alt="dummy"
          />
          <Image
            src="/images/photo-1691434864891-859ea2f60365.webp"
            height="300"
            width="300"
            alt="dummy"
          />
        </div>
        <Button className="w-fit  px-8 rounded-none self-center bg-white text-secondary hover:bg-secondary hover:text-white border border-secondary font-bold">
          Show more
        </Button>
      </div>

    </section>
  );
}
