"use client"
import React, { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { DownloadCloudIcon } from 'lucide-react'
import { GetDownloadableAssetsQuery } from '@/generated/graphql'
import { getDownloadableAssets } from '@/lib/api'

export default function DownloadTab() {

    const [downloadableAssets, setDownloadableAssets] = useState<GetDownloadableAssetsQuery | null>(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {

        startTransition(async () => {
            const response = await getDownloadableAssets();
            setDownloadableAssets(response);
        })

    }, [])

    return (
        <div className='p-[1.6rem]'>

            <h4 className='my-5' >{isPending ? "Loading ..." : "Your downloadable assets."}</h4>

            {!downloadableAssets?.activeCustomer?.customFields?.customerDownloadableAssets?.length &&  <p>No assets found.</p>  }

            {downloadableAssets?.activeCustomer?.customFields?.customerDownloadableAssets?.length &&
                <table className="table-auto">
                    <tbody>
                        <tr className="bg-accent py-3">
                            <th className="  py-3 ">Preview</th>
                            <th className=" ">File Size</th>
                            <th className=" ">Name</th>
                            <th className=" ">Dimension</th>
                            <th className=" ">Mimetype</th>
                            <th>Action</th>
                            <th> </th>
                        </tr>


                        {downloadableAssets?.activeCustomer?.customFields?.customerDownloadableAssets && downloadableAssets?.activeCustomer?.customFields?.customerDownloadableAssets.map((item, key) => (
                            <tr
                                className="text-center border-b"
                                key={key}
                            >
                                <td>
                                    <div className="flex flex-row gap-4 flex-wrap xl:flex-nowrap">
                                        <Image
                                            src={

                                                item.preview
                                            }
                                            width={90}
                                            height={90}
                                            alt="product"
                                        // className="object-cover"
                                        />
                                    </div>
                                </td>
                                <td className="py-3  px-8">{item.fileSize} KB</td>
                                <td className="py-3  px-8">{item.name}</td>
                                <td className="py-3  px-8">
                                    <div className=" w-fit py-1 text-black  px-8 rounded-md border border-gray-300">
                                        {item.width}x{item.height}
                                    </div>
                                </td>
                                <td className="  px-8 text-black">
                                    {item.mimeType}
                                </td>
                                <td className="  px-8">
                                    <Button variant={"outline"} className='text-black flex gap-x-5 items-center justify-center' onClick={() => window.open(item.source)}  >
                                        <DownloadCloudIcon /> <span >Download</span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}
