import React from "react";

import BannerPicture from "../../public/images/banner picture 2.png"
import Image from "next/image";
import ProductCategories from "@/components/ProductCategories/ProductCategories";
import PopularProducts from "@/components/products/PopularProducts/PopularProducts";
import lastBanner from "../../public/images/bag section banner.png"


export default function Welcome2() {

  return (
    <div className="px-[70px] container">


      {/* main banner  */}
      <section className="my-20 grid grid-cols-2 overflow-hidden rounded-3xl">
        <div className="bg-primary pt-20 pb-[190px] px-[70px] ">
          <p>Solo por este mes:</p>
          <h3 className="py-10 text-[36px] font-bold">Consigue un 15% de descuento en flyers!</h3>
          <div className="flex gap-6">
            <button className="bg-black  text-white w-[200px] h-[65px] text-[18px] font-medium rounded-lg">Ver productos</button>
            <button className="border-black border-[1.5px]  w-[155px] h-[65px] text-[18px] rounded-lg">Contactar </button>
          </div>
        </div>
        <div className="relative w-full">
          <Image src={BannerPicture} alt="" layout="fill" objectFit="cover" />
        </div>
      </section >




      {/* Category section  */}



      <section className="flex flex-col items-start">
        <h3 className="font-bold text-xl py-[12px]">Descubre nuestros productos</h3>
        <ProductCategories />

      </section>



      {/* popular products section */}

      <section className="pb-24">
        <h3 className="font-bold pb-12">Productos más populares</h3>


        {/* cards section */}

        <section>
          <PopularProducts />
        </section>

      </section >



      {/* last section welcome 2  */}

      <section className='flex justify-between gap-14 items-center pb-24'>
        <div className='relative  min-w-[670px] h-[415px] '>
          <Image src={lastBanner} alt="" layout="fill" objectFit="contain" />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>¿No sabes por donde comenzar? Nosotros te ayudamos</h2>
          <p className='pt-[16px] pb-[40px] text-gray-500 text-[18px] leading-7'>Desde el diseño inicial hasta la impresión final, guiamos cada paso de tu proyecto.</p>
          <div className='flex gap-[28px] items-center'>
            <button className="text-[16px] text-black bg-primary w-[130px] h-[54px] rounded-md font-bold
            flex gap-1 items-center justify-center">
              Contactar
            </button>
            <button className="text-[16px] w-[190px] h-[54px] border-[1px] border-black rounded-md font-medium ">
              Ver más productos
            </button>
          </div>
        </div>

      </section >

    </div >
  )

}