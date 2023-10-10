"use client"
import { AddPaymentToOrderMutationVariables } from '@/generated/graphql';
import { addPaymentToOrder } from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useTransition } from 'react'
import { toast } from 'react-toastify';

export default function EsewaSuccess() {

    const [isPending, startTransition] = useTransition()
    const router = useRouter();

    // get params from url 
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {

        let oid = urlParams.get("oid");
        let amt = urlParams.get("amt");
        let refId = urlParams.get("refId");

        if (!oid || !amt || !refId) {
            toast.error("Something went wrong.")
            return
        }

        const input: AddPaymentToOrderMutationVariables = {
            input: { method: "default", metadata: { oid, amt, refId } }
        }


        startTransition(async () => {
            const res = await addPaymentToOrder(input);
            if (!(res.addPaymentToOrder.__typename == "Order")) {
                toast.error(res.addPaymentToOrder.message)
                return
            }

            toast.success("Payment Successful.")

            // take to profile after payment is success
            setTimeout(() => {
                router.push("/profile2")
            }, 2000)

        })

    }, [])

    return (
        <div>Payment Was Successful.</div>
    )
}
