import Image from 'next/image';
import main from "../public/images/main.png"
import Porque from "../public/images/Por Que Nosotros.png"
import TeAyudamos from "../public/images/Tshirt Image.png"

import { ArrowRight, BadgeCheck } from "lucide-react";
import ProductCategories from '@/components/ProductCategories/ProductCategories';



// import { transformAllProductArray } from "@/lib/transformAllProductArray";
// import { getAllProducts, getBanners } from "@/lib/api";
// import { AllProductsQueryVariables } from "@/generated/graphql";

export default async function Homepage({

  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  // // static data for carousel, will be changed later
  // const SLIDE_COUNT = 10;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  // // pagination params
  // const take =
  //   typeof searchParams.take === 'string' ? Number(searchParams.take) : 30
  // const skip =
  //   typeof searchParams.skip === 'string' ? Number(searchParams.skip) : 0

  // const paginationVariables: AllProductsQueryVariables = {
  //   options: {
  //     take,
  //     skip
  //   }
  // }

  // const { data } = await getAllProducts(paginationVariables);

  // const transformedData = transformAllProductArray(data);

  // const getBannerResponse = await getBanners();

  // const bannerImages = (getBannerResponse.activeChannel.customFields?.bannerImage && getBannerResponse.activeChannel.customFields?.bannerImage.map(item => item.source)) || [];




  return (
    <div>
      {/* home page contents */}
      {/* main section */}
      <section className="px-[80px] py-[49px] container">
        <div className="flex items-center gap-20 justify-between">

          {/* title and text  */}
          <div className="max-w-[672px]">
            <h1 className="font-extrabold text-[60px] py-[12px]">Expande tu marca, crea tus productos</h1>
            <p className="text-gray-500 py-[12px] ">Transforma tus ideas en impresos vívidos. Con tecnología de punta y expertos a tu servicio, hacemos realidad tu visión en Tenerife y el mundo.</p>

            {/* buttons  */}
            <div className="flex gap-[28px]">
              <button className="text-[16px] flex gap-1 items-center justify-center bg-primary w-[180px] h-[48px] rounded-md font-medium py-[12px]">
                Ver productos <ArrowRight />
              </button>
              <button className="text-[16px] w-[195px] h-[48px] border-[1px] border-black rounded-md font-medium py-[12px]">
                Solicita tu impresión
              </button>
            </div>
          </div>

          {/* image  */}
          <div className="relative w-[572px] h-[415px]">
            <Image src={main} alt="" layout="fill" objectFit="contain" />
          </div>        </div>
      </section>

      {/* popular assets section title and text */}
      <section className="px-[80px] pt-[49px] container ">
        <div className="text-center  flex items-center flex-col">
          <h1 className="font-extrabold text-[60px] py-[12px]">Descubre nuestros productos</h1>
          <p className="max-w-[768px] py-[12px]">Expertos en impresión digital de alta calidad. Convierte tus diseños en obras maestras con tecnología avanzada y servicio personalizado.</p>
        </div>
        <div>
        </div>
      </section>

      {/* products categories x 5  */}
      <section className='flex justify-center'>
        <ProductCategories />
      </section>

      {/* Como funciona? section  */}

      {/* title  */}
      <section className='py-[80px] px-[114px] bg-primary flex items-center flex-col gap-[70px]'>
        <div className='pb-[35px] text-center max-w-[768px]'>
          <p className='font-medium text-'>Sencillo y rápido</p>
          <h1 className='font-semibold py-[12px] text-[44px]'>¿Cómo funciona?</h1>
          <p className='font-medium'>Sube tus ideas o co-diseña con expertos. Transformamos tus visiones en impresiones de alta calidad. Un proceso sencillo para resultados sorprendentes.</p>
        </div>



        {/* cards  */}
        <div className='flex  gap-[32px] text-center'>
          <div className='w-[384px]'>
            <div className='flex justify-center pb-[20px]'>
              <div className='rounded-full font-medium w-[48px] h-[48px] bg-white flex items-center justify-center'>
                1
              </div>
            </div>
            <div className='w-[384px] flex flex-col items-center'>
              <p className='pb-4'>Elige un producto</p>
              <p className='text-[14px] max-w-[360px]'>Recibe tus impresiones rápidamente con nuestro servicio de envío confiable. Entregamos calidad directo a tu puerta.</p>
            </div>
          </div>

          <div className='w-[384px]'>
            <div className='flex justify-center pb-[20px]'>
              <div className='rounded-full font-medium w-[48px] h-[48px] bg-white flex items-center justify-center'>
                2
              </div>
            </div>
            <div className='w-[384px] flex flex-col items-center'>
              <p className='pb-4'>Sube o crea un diseño con nosotros</p>
              <p className='text-[14px] max-w-[360px]'>Trabaja mano a mano con nuestros especialistas en diseño para obtener impresiones impactantes.</p>
            </div>
          </div>

          <div className='w-[384px]'>
            <div className='flex justify-center pb-[20px]'>
              <div className='rounded-full font-medium w-[48px] h-[48px] bg-white flex items-center justify-center'>
                3
              </div>
            </div>
            <div className='w-[384px] flex flex-col items-center'>
              <p className='pb-4'>Solicita el producto</p>
              <p className='text-[14px] max-w-[360px]'>Elige, personaliza y ordena con facilidad. Garantizamos una experiencia de compra intuitiva y productos de primera.</p>
            </div>
          </div>

        </div>

      </section>


      {/* Por Que Nosotros?  Section */}

      <section className='py-[60px] bg-black '>
        <div className='px-20 flex container gap-16 justify-center'>


          {/* photo  */}

          <div className='w-[575px] h-[575px] relative'>
            <Image src={Porque} alt="" layout="fill" objectFit="contain" />
          </div>


          {/* title  */}

          <div className='text-white'>
            <h1 className='font-semibold py-[20px] text-[56px]'>
              ¿Por qué nosotros?
            </h1>

            <p className='font-medium w-[630px] leading-[30px]  pb-[40px]'>
              Imprenta digital de vanguardia. Calidad, rapidez y atención personalizada que marcan la diferencia.
            </p>


            {/* contents  */}
            <div className='flex gap-[20px] py-6.5'>
              <div>
                <BadgeCheck fill="#fff" stroke="#000" size="50px" />
              </div>
              <div className='text-[16px] max-w-[590px] leading-[30px] '>
                Duotono ofrece soluciones personalizadas: Cada proyecto es único, y nuestra tecnología permite adaptaciones específicas para cada cliente.
              </div>
            </div>

            {/* contents  */}
            <div className='flex gap-[17px] py-6.5'>
              <div>
                <BadgeCheck fill="#fff" stroke="#000" size="50px" />
              </div>
              <div className='text-[16px] max-w-[590px] leading-[30px] '>
                La innovación es nuestro sello: Duotono se mantiene a la vanguardia en técnicas y materiales, asegurando resultados que sobrepasan expectativas.
              </div>
            </div>

            {/* contents  */}
            <div className='flex gap-[17px] py-6.5'>
              <div>
                <BadgeCheck fill="#fff" stroke="#000" size="50px" />
              </div>
              <div className='text-[16px] max-w-[590px] h-[72px] leading-[30px] '>
                Asesoramiento experto en diseño: Más allá de la impresión, Duotono te brinda consultoría para maximizar el impacto visual de tus archivos.
              </div>
            </div>


            <button className="text-[16px] text-black mt-[48px] flex gap-1 items-center justify-center bg-primary w-[180px] h-[48px] rounded-md font-medium py-[12px]">
              Ver productos <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* last section home  */}
      <section className='flex justify-center gap-16 px-20 items-center pt-[65px] pb-[70px] container'>
        <div className='w-[672px]'>
          <h1 className='text-[60px] font-extrabold'>Te ayudamos con tu impresión digital</h1>
          <p className='py-[24px] text-gray-500'>Eleva tu marca con la más alta calidad en impresión digital. Precisión, rapidez y confiabilidad. ¡Haz que tu proyecto destaque!</p>
          <div className='flex gap-[28px] items-center'>
            <button className="text-[16px] text-black bg-primary w-[149px] h-[48px] rounded-md font-medium
            flex gap-1 items-center justify-center">
              Contactar <ArrowRight />
            </button>
            <button className="text-[16px] w-[200px] h-[48px] border-[1px] border-black rounded-md font-medium ">
              Solicitar presupuesto
            </button>
          </div>
        </div>
        <div className='relative w-[540px] h-[453px]'>
          <Image src={TeAyudamos} alt="" layout="fill" objectFit="contain" />
        </div>
      </section>

    </div >
  );
}
