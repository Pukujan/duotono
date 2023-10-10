"use client"
import { ProductPriceDetails } from "@/app/products/[slug]/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActiveOrdersQuery, AddItemToOrderMutationResult } from "@/generated/graphql";
import { addItemToOrder, getActiveOrders } from "@/lib/api";
import { paisaToNpr } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

export default function PrintDetails({
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

  const [quantity, setQuantity] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const router = useRouter()

  const handleAddToCart = async () => {

    if (!quantity || quantity <= 0) {
      toast.error("Please add quantity.")
      return
    }

    startTransition(async () => {

      const checkOrderExist: ActiveOrdersQuery = await getActiveOrders();

      if (checkOrderExist.activeOrder?.lines.length) {
        toast.error("Cannot create more than one order at a time.")
        return
      }

      const res: any = await addItemToOrder(priceDetails.variantId, quantity, { orderType: "print" });

      if (!res.data) return;

      if (res.data.addItemToOrder.__typename === "Order") {
        toast.success(`${quantity} items added to cart.`)
        router.refresh();
      }
      else {
        toast.error(res.data.addItemToOrder.message);
        router.refresh()
      }
      setQuantity(0)
    })
  }
  console.log({ quantity })

  return (
    <div className="p-5 flex flex-col gap-3">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between w-full">
          <span className="text-lg font-extrabold">Business Card</span>
          <span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose side" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose side</SelectLabel>
                  <SelectItem value="single-side">Single Side</SelectItem>
                  <SelectItem value="both-side">Both Side</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Size</span>
          <span>
            {`${customFields?.width || "None"} x ${customFields?.height || "None"}`}

          </span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Paper weight</span>
          <span>{customFields.paperWeight || "None"}</span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Lamination</span>
          <span>{customFields.lamination || "None"}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Weight</span>
          <span>{customFields.weigth || "None"}</span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Required Quantity*</span>
          <span>
            <Input
              type="number"
              placeholder="500"
              className="w-1/3 ml-auto"
              value={quantity}
              onChange={e => setQuantity(() => +e.target.value)}
            />
          </span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-extrabold">Business Card</span>
          <span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Price Mode</SelectLabel>
                  <SelectItem value="default">Default Payment</SelectItem>
                  <SelectItem value="subscription">Subscription</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
        </div>
      </div>

      <Button variant={"destructive"}>Order Details</Button>

      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Time</span>
          <span>6 days 0 hours</span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Total Weight</span>
          <span>0 kg 670 grams</span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Price</span>
          <span>Rs. {paisaToNpr(priceDetails.price)}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Discount</span>
          <span>Rs. 0.00</span>
        </div>

        <div className="flex justify-between w-full">
          <span className="text-sm font-semibold">Total Price</span>
          <span>Rs. {paisaToNpr(priceDetails.priceWithTax)} </span>
        </div>
      </div>

      {/* show sign in option to unauthenticated users */}
      {!isAuthenticated && (
        <div>
          <p>Please sign in to order the product.</p>
          <Link
            href={"/login"}
            className="text text-gray-700 underline"
          >
            Signin here
          </Link>
        </div>
      )}

      {/* show cart and checkout to logged in user. */}
      {isAuthenticated && (
        <div className="flex gap-x-3 w-full">
          <Button className="bg-lime-700 w-full" onClick={handleAddToCart} disabled={isPending} >{isPending ? "Adding to cart" : "Add to cart."}</Button>
          <Button className="w-full">Order Now</Button>
        </div>
      )}
    </div>
  );
}
