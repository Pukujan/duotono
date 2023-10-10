import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ShippingAddressForm from '@/components/Checkout/ShippingAddressForm'

export default function ShippingAddress() {

  
  return (
    <>
    <div className="col-span-full xl:col-[1/8] font-semibold">
        <h3>Shipping</h3>
      <ShippingAddressForm />

    </div>
    <div className="p-3 pb-12 col-span-full justify-self-center xl:col-[9/12] min-w-[350px] max-w-[350px] h-[300px] flex flex-col items-center gap-12 bg-accent">
      <h1 className="text-2xl font-bold">Total Amount</h1>
      <div className="w-full flex flex-col gap-6 justify-between">
        <div className="flex flex-row justify-between">
          <p>Subtotal</p>
          <p className="opacity-70">
            Rs. 123
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p>Tax Rate</p>
          <p className="opacity-70">
            123%
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p>Total</p>
          <p className="text-lg">
            Rs. 123
          </p>
        </div>
        {/* <Button className="w-fit  px-8 rounded-lg self-center bg-secondary font-bold">
          <Link href={"/checkout/shipping_address"}>Check Out</Link>
        </Button> */}
      </div>
    </div>
  </>
  )
}
