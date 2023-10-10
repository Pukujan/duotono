"use client"
import React, { useEffect, useState, useTransition } from 'react'

import { generateUniqueId } from '@/lib/generateUniqueId';
import { usePayment } from '@/hooks/use-payment';
import { Button } from '@/components/ui/button';
import { addPaymentToOrder, getActiveOrders, getQrImage } from '@/lib/api';
import { paisaToNpr } from '@/lib/utils';
import Image from 'next/image';
import { AddPaymentToOrderMutationVariables, GetQrImageQuery } from '@/generated/graphql';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Payment() {

  const {
    createPayment,
    error: paymentError,
    resetError: resetPaymentError,
    loading: paymentLoading,
  } = usePayment();

  const [price, setPrice] = useState<number>(0)
  const [isPending, startTransition] = useTransition();
  const [qrDetails, setQrDetails] = useState<GetQrImageQuery | null>(null);

  const [transactionId, setTransactionId] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("")


  useEffect(() => {

    startTransition(async () => {
      const response = await getActiveOrders();
      const response2 = await getQrImage();
      setPrice(paisaToNpr(response.activeOrder?.totalWithTax));
      setQrDetails(response2)
    })

  }, [])

  const router = useRouter()

  const handleSubmit = async () => {
    if (!transactionId || !name || !phone) {
      return toast.error("All fields are required.")
    }

    startTransition(async () => {
      const input: AddPaymentToOrderMutationVariables = {
        input: {
          metadata: {
            id: transactionId, phone, name
          },
          method: "qr-pay"
        }
      }

      const res = await addPaymentToOrder(input);

      if (!(res.addPaymentToOrder.__typename == "Order")) {
        toast.error(res.addPaymentToOrder.message)
        return
      }

      toast.success("Thankyou, we will verify payment and contact you.");

      setTimeout(() => {
        router.push("/profile2")
      }, 1500)
    })

  }

  return (
    <>
      <div className="col-span-full">

        {/* <p>Select Payment Method.</p> */}

        <div className='flex gap-x-10 w-full flex-col items-center' >


          <p className='my-5' >Please scan the qr below. After payment, copy your payment id, name and phone and submit it in form below this qr code.</p>



          {qrDetails && qrDetails.activeChannel.customFields?.qrPay && <Image src={qrDetails.activeChannel.customFields?.qrPay[0].source} width={500}
            height={500} alt='qr code image' />}


          <div className='flex flex-col gap-y-5 items-center mt-5' >

            <p className="font-bold">Payment Details</p>

            <Input placeholder='Transaction Id/Code' value={transactionId} onChange={e => setTransactionId(e.target.value)} />
            <Input placeholder='Phone Number' value={phone} onChange={e => setPhone(e.target.value)} />
            <Input placeholder='Name' value={name} onChange={e => setName(e.target.value)} />

            <Button onClick={handleSubmit} disabled={isPending} >Submit</Button>
          </div>



          {/* <Button
            type='button'
            disabled={isPending}
            className=' bg-green-500'
            onClick={() => {
              createPayment({
                strategy: 'esewa',
                config: {
                  amt: Number(price),
                  pid: `Px${generateUniqueId()}`,
                },
              });
            }}
          >
            Esewa Pay
          </Button>

          <Button
            type='button'
            disabled={isPending}
            onClick={() => {
              createPayment({
                strategy: 'khalti',
                config: {
                  amount: Number(price) * 100,
                  purchase_order_id: `Kx${generateUniqueId()}`,
                  purchase_order_name: 'Purchase',
                },
              });
            }}
          >
            Khalti Pay
          </Button> */}
        </div>

      </div>
    </>
  )
}
