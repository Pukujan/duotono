import Image from 'next/image'
import React from 'react'

import SampleImage from '../../../public/images/SampleImage.png'

export default function PopularProducts() {

  const productList = [
    {
      title: "Tarjetas de presentación",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Flyer publicitarios",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Sobres",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Carpetas",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Tarjetas de presentación",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Flyer publicitarios",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Sobres",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },
    {
      title: "Carpetas",
      description: "Low contrast between thick and thin strokes.",
      image: SampleImage,
      stock: 1000,
      originalPrice: "54€",
      discounted: "49,90€"
    },

  ]

  return (
    <div>
      {/* product cards */}
      <div className="grid grid-cols-4 gap-10">
        {/* cards  */}
        {productList && productList.map((product, index) =>
          <div key={index} className="w-[297px] ">
            <div className="relative w-[297px] h-[250px]">
              <Image src={product.image} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="pt-[32px] pb-[20px] flex flex-col gap-3">
              <h4 className="text-[20px] font-bold">{product.title}</h4>
              <p className="text-[18px] text-gray-500">{product.description}</p>
            </div>
            <div>
              <p className="pb-[6px]">{product.stock} unidades por</p>
              <div className="flex items-baseline gap-2">
                <p className="text-gray-500">{product.originalPrice}</p>
                <h3 className="text-gray-500 font-bold">{product.discounted}</h3>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}