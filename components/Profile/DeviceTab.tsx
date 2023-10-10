import { getActiveDevices } from '@/lib/api'
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { EyeIcon } from 'lucide-react';

export default async function DeviceTab() {

    const data = await getActiveDevices();

    return (
        <div className='p-[1.6rem]'>

            {data.length <= 0 && <p>No devices found.</p>}

            {data.length > 0 &&
                <table className="table-auto">
                    <tbody>
                        <tr className="bg-accent py-3">
                            <th className="  py-3 ">Device ID</th>
                            <th className=" ">IP Address</th>
                            <th>Last Login</th>
                            <th> </th>
                        </tr>


                        {data && data.map((item, key) => (
                            <tr
                                className="text-center border-b"
                                key={key}
                            >
                                <td>

                                    {item.name}
                                </td>
                                <td className="py-3  px-8">{item.ip}</td>

                                <td className="  px-8">
                                    {new Date(item.datetime).toString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}
