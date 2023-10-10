import React from "react"
import Papeleria from "../../public/images/Papelería y oficina.png"
import Decoracion from "../../public/images/Decoración y regalos.png"
import Empaques from "../../public/images/Empaques.png"
import Publicdad from "../../public/images/Publicidad y exterior.png"
import Ropa from "../../public/images/Ropa y accesorios.png"
import Image from "next/image"

export default function ProductCategories() {


  const Categories = [
    { title: "Papelería y oficina", image: Papeleria },
    { title: "Publicidad y exterior", image: Publicdad },
    { title: "Ropa y accesorios", image: Ropa },
    { title: "Decoración y regalos", image: Decoracion },
    { title: "Empaques", image: Empaques },

  ];

  return (
    <section className="flex justify-between">


      {/* product cards */}
      {Categories && Categories.map((product, index) =>
        <div key={index} className="w-[250px] h-[400px] font-bold pb-[36px]">
          <div className="px-12 flex justify-center items-center">
            <div className="relative  h-[310px] w-[239px]">
              <Image src={product.image} alt="" layout="fill" objectFit="contain" className="transform scale-150" />
            </div>
          </div>
          <div className="h-[84px]">
            <p className="text-center pt-[5px]">{product.title}</p>
          </div>
        </div>
      )}



    </section >
  )
}