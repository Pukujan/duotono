"use client"

import React from 'react'
import SearchBar from '../../SearchBar'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
export default function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {

  const logoLink =
    { label: "Duotuno Design", href: "/" };

  const navLinks = [
    { label: "Productos", href: "/" },
    { label: "Nuestros Services", href: "/" },
    { label: "Quienes Somos", href: "/" },
  ];


  return (

    <div className='flex justify-between items-center'>
      <Link className='font-semibold
      text-[24px] text-gray-900' href={logoLink.href}>
        {logoLink.label}</Link>

      {/* Search bar  */}
      <div className='bg-gray-50 border border-gray-200 rounded-md'>
        <div className='w-[307px] h-[18px] mx-[16px] my-[12px] text-gray-500'>
          <SearchBar />
        </div>
      </div>

      {/* Menu  */}
      {navLinks.map((link, index) => (
        <div key={index} className="flex gap-8
          font-medium text-gray-900 ">


          <Link className="text-[14px]" href={link.href}>{link.label}</Link>


        </div>
      ))}


      {/* buttons and cart  */}
      <div className='flex gap-5'>
        <button
          className='rounded-md w-[130px] h-[40px] bg-primary text-gray-900 font-medium text-[14px]'>
          Te ayadumos
        </button>
        <button className='w-[70px] h-[40px]  text-white
        flex rounded-md items-center justify-center gap-2 bg-secondary'>
          <ShoppingCart />
          <div className='text-[14px]'>3</div>

        </button>
      </div>
    </div>
  )
}

