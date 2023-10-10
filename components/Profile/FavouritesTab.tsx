"use client"
import React, { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import {  EyeIcon } from 'lucide-react'
import { GetFavouritesQuery } from '@/generated/graphql'
import {  getFavourites } from '@/lib/api'

export default function FavouritesTab() {

    const [favourites, setFavourites] = useState<GetFavouritesQuery | null>(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {

        startTransition(async () => {
            const response = await getFavourites();
            setFavourites(response);
        })

    }, [])

    return (
        <div className='p-[1.6rem]'>

            <h4 className='my-5' >{isPending ? "Loading ..." : "Favourites"}</h4>

            {!favourites?.activeCustomer?.customFields?.favorites?.length &&  <p>No favourites found.</p>  }

            {favourites?.activeCustomer?.customFields?.favorites?.length &&
                <table className="table-auto">
                    <tbody>
                        <tr className="bg-accent py-3">
                            <th className="  py-3 ">Preview</th>
                            <th className=" ">Name</th>
                            <th>Action</th>
                            <th> </th>
                        </tr>


                        {favourites?.activeCustomer?.customFields?.favorites?.length && favourites?.activeCustomer?.customFields?.favorites.map((item, key) => (
                            <tr
                                className="text-center border-b"
                                key={key}
                            >
                                <td>
                                    <div className="flex flex-row gap-4 flex-wrap xl:flex-nowrap">
                                        <Image
                                            src={

                                                item.assets[0].source || "/logo.png"
                                            }
                                            width={90}
                                            height={90}
                                            alt="product"
                                        // className="object-cover"
                                        />
                                    </div>
                                </td>
                                <td className="py-3  px-8">{item.name}</td>
                            
                                <td className="  px-8">
                                    <Button variant={"outline"} className='text-black flex gap-x-5 items-center justify-center' onClick={() => window.open(`/products/${item.slug}`)}  >
                                        <EyeIcon /> <span >View</span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}
