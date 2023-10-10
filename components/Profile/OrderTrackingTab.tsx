"use client"
import React, { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { DownloadCloudIcon } from 'lucide-react'
import { GetOrderHistoryQuery } from '@/generated/graphql'
import { getOrderHistory } from '@/lib/api'
import { paisaToNpr } from '@/lib/utils'

export default function OrderTrackingTab() {

    const [isPending, startTransition] = useTransition();
    const [orders, setOrders] = useState<GetOrderHistoryQuery | null>(null);

    useEffect(() => {

        startTransition(async () => {

            const data = await getOrderHistory();
            setOrders(data);

        })

    }, [])

    console.log({orders})

    /**
     * Show loading if data take time to fetch.
     */
    if (isPending) {
        return (<h3>Loading ...</h3>)
    }



    return (
        <div className='p-[1.6rem]'>

            <h4 className='my-5' >Your orders.</h4>



            <table className="table-auto">
                <tbody>
                    <tr className="bg-accent py-3">
                        <th className="  py-3 ">Product Name</th>
                        <th className=" ">Order Date</th>
                        <th className=" ">Price</th>
                        <th className=" ">Quantity</th>
                        <th className=" ">Status</th>
                        <th> </th>
                    </tr>

                    {orders?.activeCustomer?.orders.items.length && orders?.activeCustomer?.orders.items.map((item,key) => (
                         <tr
                         className="text-center border-b"
                         key={key}
                     >
                         <td className="py-3  px-8">
                            {item.lines[0]?.productVariant.name || "Undefined"}
                         </td>
                         <td className="py-3  px-8">{item.lines[0]?.customFields?.orderType || "Print"}</td>
                         <td className="py-3  px-8">Rs. {paisaToNpr(item.totalWithTax)}</td>
                         <td className="py-3  px-8">
                             <div className=" w-fit py-1 text-black  px-8 rounded-md border border-gray-300">
                                 {item.totalQuantity}
                             </div>
                         </td>
                         <td className="  px-8 text-black">
                            {item.state}
                         </td>
                       
                     </tr>
                    )) }


                </tbody>
            </table>
        </div>
    )
}
