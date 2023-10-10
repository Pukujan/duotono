"use client"

import React, { useEffect } from 'react'
import { addItemToOrder, addPaymentToOrder, createOrderShippingAddress, getActiveOrders, getActiveSubscription, getAllSubscriptionPackages, setOrderShippingMethod, transitionOrderState } from '@/lib/api'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ActiveOrdersQuery } from '@/generated/graphql';

const Page = () => {
  const router = useRouter();
  const finalizeOrder = async () => {
    try {

      const response = await createOrderShippingAddress({
        input: {
          fullName: "Download",
          phoneNumber: "Download",
          streetLine1: "Download",
          city: "Download",
          countryCode: "NP",
          defaultBillingAddress: true,
          defaultShippingAddress: true,
        },
      });

      if (response.setOrderShippingAddress.__typename === "NoActiveOrderError") {
        toast.error(response.setOrderShippingAddress.message)
        return;
      }

      toast.success("Address added.")

      /** TODO
       * Currently manually transitioning the order state and shipping method
       * Need to create backward state transition and allow user to choose shipping method from UI.
       */

      const shippingMethodResponse = await setOrderShippingMethod({ shippingMethodId: "1" });
      console.log({ shippingMethodResponse })

      const transitionStateResponse = await transitionOrderState({ state: "ArrangingPayment" })
      console.log({ transitionStateResponse })


      /**
       * Add payment to order
       */

      const subscriptionDetails = await getActiveSubscription();

      const addPaymentToOrderResponse = await addPaymentToOrder({
        input: {
          metadata: {
            id: subscriptionDetails.activeSubscription?.id
          },
          method: "subscription"
        }
      })


      if (!(addPaymentToOrderResponse.addPaymentToOrder.__typename == "Order")) {
        return toast.error(addPaymentToOrderResponse.addPaymentToOrder.message)
      }

      toast.success("Asset downloaded successfully.")

      setTimeout(() => {
        router.push("/profile2")
      }, 1500)


    }
    catch (error: any) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    finalizeOrder();
  }, [])

  return (
    <div>
      <h1>Please wait....</h1>
    </div>
  )

}

export default Page