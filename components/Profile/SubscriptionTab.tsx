import { getCurrentSubscriptionPackage } from '@/lib/api'
import { paisaToNpr } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

export default async function SubscriptionTab() {

    const data = await getCurrentSubscriptionPackage();

    if (!data) return (
        <h4>You are not subscribed to any of our plan.  Subscribe <Link href={"/pricing"} className='underline text-blue-600' >here</Link> </h4>
    )

    return (
        <div className='p-[1.6rem]'>
            <p className='text font-bold text-xl' > Your current Subscription</p>

            <ul className='mt-5' >
                <li>Plan:  {data?.subscriptionPackage?.variant.name}</li>
                <li>Price: Rs. {paisaToNpr(data.subscriptionPackage?.variant.price)} </li>
                <li>Subscribed At: {new Date(data.activeSubscription?.createdAt).toLocaleString()} </li>
                <li>Revoke Date:  {new Date(data.activeSubscription?.revokedAt).toLocaleString()}</li>
            </ul>
        </div>
    )
}
