import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActiveOrdersQuery } from "@/generated/graphql";
import { addItemToOrder, getActiveOrders, getActiveSubscription, getEligiblePaymentMethods } from "@/lib/api";
import { toast } from "react-toastify";
import { ProductPriceDetails } from "@/app/products/[slug]/page";
import { useRouter } from "next/navigation";

export default function DownloadDetails({
  imageDetails,
  isAuthenticated,
  priceDetails,
  customFields
}: {
  imageDetails: any;
  isAuthenticated: boolean;
  priceDetails: ProductPriceDetails;
  customFields: any
}) {
  const router = useRouter();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  let isSubscriptionEligible: boolean = false;

  useEffect(() => {

    (async function () {
      const activeSubscription = await getActiveSubscription();

      if (activeSubscription.activeSubscription?.id) {
        setIsSubscribed(true)
      } else {
        setIsSubscribed(false)
      }
    }())

  }, [])

  const handleAddDownloadToCart = async (
    variantId: string | number,
    quantity: number
  ) => {
    const checkOrderExist: ActiveOrdersQuery = await getActiveOrders();

    if (checkOrderExist.activeOrder?.lines.length) {
      toast.error("Cannot create more than one order at a time.");
      return;
    }

    const eligiblePayments = await getEligiblePaymentMethods();
    eligiblePayments.eligiblePaymentMethods.forEach((method) => {
      if (method.name === "Subscription") {
        isSubscriptionEligible = method.isEligible;
      }
    })

    const res: any = await addItemToOrder(variantId, quantity, {
      orderType: "download",
    });

    if (!res.data) return;

    if (res.data.addItemToOrder.__typename === "Order") {
      toast.success(`${quantity} items added to cart.`);

      // wait to 1.5s before redirecting to checkout page.
      setTimeout(() => {
        router.refresh();
        router.push("/checkout");
      }, 1500);
    } else {
      toast.error(res.data.addItemToOrder.message);
    }
  };

  return (
    <div className="p-5 flex flex-col gap-3">
      <Badge
        variant="outline"
        className="bg-secondary text-white w-fit py-1 px-2 "
      >
        LOVE THIS ITEM?
      </Badge>

      <p className="w-3/4 text-md font-semibold">
        Enjoy all the benefits of goonji.com subscription.
      </p>

      <ul className="list-none flex flex-col gap-1 text-sm">
        <li className="flex gap-x-3">
          <CheckCircle
            size={15}
            color="lightgreen"
          />
          Creative assets
        </li>
        <li className="flex gap-x-3">
          <CheckCircle
            size={15}
            color="lightgreen"
          />
          Unlimited downloads
        </li>
        <li className="flex gap-x-3">
          <CheckCircle
            size={15}
            color="lightgreen"
          />
          Simple commercial licensing
        </li>
        <li className="flex gap-x-3">
          <CheckCircle
            size={15}
            color="lightgreen"
          />
          Cancel anytime
        </li>
      </ul>

      {/* Show subscribe button to un authenticated users */}
      {isAuthenticated && !isSubscribed && (
        <Button variant="destructive" onClick={() => {
          router.push('/pricing');
        }}>
          Subscribe to download
        </Button>
      )}

      {/* show download button to authenticated users */}
      {isAuthenticated && isSubscribed && (
        <Button
          variant="destructive"
          // disabled={!isSubscriptionEligible}
          onClick={() => handleAddDownloadToCart(priceDetails.variantId, 1)}
        >
          Download
        </Button>
      )}

      {/* Show login option to the user who is not logged in. */}
      {!isAuthenticated && (
        <div>
          <p>Already a goonji member ?</p>
          <Link
            href="/login"
            className="text text-gray-700 underline"
          >
            Signin here
          </Link>
        </div>
      )}

      <ul className="list-none flex flex-col gap-y-2 text-sm">
        <li className="flex w-full justify-between">
          <span className="font-bold">Format:</span>
          <span><Badge>{customFields.format || "None"}</Badge></span>
        </li>
        <li className="flex w-full justify-between">
          <span className="font-bold">Width:</span>
          <span>{customFields.width || "None"}</span>
        </li>
        <li className="flex w-full justify-between">
          <span className="font-bold">Hieght:</span>
          <span>{customFields.height || "None"}</span>
        </li>
        <li className="flex w-full justify-between">
          <span className="font-bold">Resolution:</span>
          <span>{customFields?.resolution || "None"}</span>
        </li>
        <li className="flex w-full justify-between">
          <span className="font-bold">Application Supported:</span>
          <span>{customFields?.supportedApps || "None"}</span>
        </li>
      </ul>
    </div>
  );
}
