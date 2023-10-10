"use client"

import React, {useEffect, useState, useTransition} from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'
import { CheckCircleIcon } from 'lucide-react';
import { getAllSubscriptionPackages , addSubscriptionToOrder, getCurrentUser } from '@/lib/api';
import { AddSubscriptionToOrderMutation } from '@/generated/graphql';
import { toast } from "react-toastify";

export default function Pricing() {
    const [subscriptions, setSubscriptions] = useState<any[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter()

    const getAllSubscriptionOptions = async () => {
            const response  = await getAllSubscriptionPackages();
            if (!response.data) return;
            const subscriptionOptions = response.data.subscriptionPackages.items.map((item:any) => ({
                id: item.id,
                name: item.variant.name
            }))
            console.log(subscriptionOptions);
            setSubscriptions(subscriptionOptions);
    }
    const getUser = async () => { 
        const user:any = await getCurrentUser();
        if ((user.activeCustomer?.__typename === "Customer")) {
            setIsAuthenticated(true);
          }
    }

    const handleChooseSubscription = async (subscriptionPackageId:number|string) => {
        if (!isAuthenticated) {
            router.push('/login')
        }
        const res:AddSubscriptionToOrderMutation = await addSubscriptionToOrder(subscriptionPackageId);
        if (res.addSubscriptionToOrder?.__typename === "Order") {
            toast.success(`Subscription Added to Cart`)
            router.push('/checkout');
        }
        else {
            toast.error('Unable to add your order')
        }
        console.log(res);    
    }

    useEffect(() => {
        getAllSubscriptionOptions();
        getUser();
    }, [])
    


    return (
        <div className='flex flex-col h-full w-full items-center gap-5 pb-10'>
            <div className=' text-3xl text-secondary font-extrabold mt-5' >
                Pricing
            </div>
            <div className='text-[20px] text-black  font-normal text-center' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt officiis corporis cumque architecto eaque inventore, suscipit sunt consequuntur rem blanditiis et earum dolor quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus voluptatum distinctio fuga omnis fugiat harum. Fugit delectus saepe sunt placeat provident? Veritatis dolorum distinctio a odit molestiae amet exercitationem.
            </div>

            <div className='mt-5 w-full grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0  bg-white shadow-lg'>
                <div >
                    {
                        subscriptions.map((subscription: any) => (
                            <div className='w-full p-[1.6rem] h-[400px]'>
                                <div className='text-2xl font-extrabold '>
                                    {subscription.name}
                                </div>
                                <div className='text-xl text-info2 mt-5' >What You'll Get</div>

                                <ul className='list-none text-lg mt-5 border-b border-dashed pb-5' >
                                    <li className='flex gap-5'>
                                        <span> <CheckCircleIcon size={15} /> </span>
                                        <span>Edit up to 10,000 Photoshop, Illustrator files.</span>
                                    </li>
                                    <li className='flex gap-5'>
                                        <span> <CheckCircleIcon size={15} /> </span>
                                        <span>Edit up to 10,000 Photoshop, Illustrator files.</span>
                                    </li>
                                </ul>

                                <div className='flex flex-col justify-end items-center'>
                                    <div className='text-lg font-extrabold mt-10' >Free Forever</div>
                                    <Button 
                                    variant="secondary" 
                                    className='rounded-none w-3/4' 
                                    onClick={() => handleChooseSubscription(subscription.id)}
                                    >
                                        Choose
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* <div className=' w-full p-[1.6rem] bg-secondary lg:mt-[-20px] h-[400px]'>
                    <div className='text-2xl font-extrabold text-white'>
                        Basic Subscription
                    </div>
                    <div className='text-xl text-info2 mt-5' >What You'll Get</div>

                    <ul className='list-none text-lg mt-5 border-b border-dashed pb-5 text-white' >
                        <li className='flex gap-5'>
                            <span> <CheckCircleIcon size={15} /> </span>
                            <span>Edit up to 10,000 Photoshop, Illustrator files.</span>
                        </li>
                        <li className='flex gap-5'>
                            <span> <CheckCircleIcon size={15} /> </span>
                            <span>Edit up to 10,000 Photoshop, Illustrator files.</span>
                        </li>
                    </ul>

                    <div className='flex flex-col justify-end items-center text-white'>
                        <div className='text-lg font-extrabold mt-10' >Free Forever</div>
                        <Button variant="secondary" className='rounded-none w-3/4 bg-white text-black' >Choose</Button>
                    </div>

                </div> */}

                {/* <div className='w-full p-[1.6rem] h-[400px]'>
                    <div className='text-2xl font-extrabold '>
                        Basic Subscription
                    </div>
                    <div className='text-xl text-info2 mt-5' >What You'll Get</div>

                    <ul className='list-none text-lg mt-5 border-b border-dashed pb-5' >
                        <li className='flex gap-5'>
                            <span> <CheckCircleIcon size={15} /> </span>
                            <span>Edit up to 10,000 Photoshop, Illustrator files.</span>
                        </li>
                        <li className='flex gap-5'>
                            <span> <CheckCircleIcon size={15} /> </span>
                            <span>Edit up to 10,000 Photoshop, Illustrator files.</span>
                        </li>
                    </ul>

                    <div className='flex flex-col justify-end items-center'>
                        <div className='text-lg font-extrabold mt-10' >Free Forever</div>
                        <Button variant="secondary" className='rounded-none w-3/4' >Choose</Button>
                    </div>

                </div> */}
            </div>
        </div>
    )
}
