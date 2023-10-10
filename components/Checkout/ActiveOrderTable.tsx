"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeItemFromCart } from "@/lib/api";
import { ActiveOrdersQuery } from "@/generated/graphql";
import { paisaToNpr } from "@/lib/utils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ActiveOrderTable({
  activeOrders,
}: {
  activeOrders: ActiveOrdersQuery | null;
}) {
  if (!activeOrders) return <h3>Active orders not found.</h3>;

  const router = useRouter()

  const handleRemoveItemFromCart = async (id: String) => {
    try {

      const res = await removeItemFromCart(id);
      router.refresh()

      if (res.__typename === "OrderModificationError") {
        toast.error(res.message)
        return
      }


      toast.success("Item removed from cart.")


    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.")
    }
  }

  return (
    <table className="table-auto">
      <tbody>
        <tr className="bg-accent py-3">
          <th className="  py-3 ">Product</th>
          <th className=" ">Order Type</th>
          <th className=" ">Price</th>
          <th className=" ">Quantity</th>
          <th>Subtotal</th>
          <th> </th>
        </tr>

        {activeOrders &&
          activeOrders.activeOrder?.lines.map((item, key) => (
            <tr
              className="  text-info2 text-center"
              key={key}
            >
              <td>
                <div className="flex flex-row gap-4 flex-wrap xl:flex-nowrap">
                  <Image
                    src={
                      item.featuredAsset?.source ||
                      "/images/gonnjiSubscription.png"
                    }
                    width={90}
                    height={90}
                    alt="product"
                  // className="object-cover"
                  />
                </div>
              </td>
              <td className="py-3  px-8">{activeOrders.activeOrder?.lines[0].customFields?.orderType}</td>
              <td className="py-3  px-8">Rs. {paisaToNpr(item.unitPrice)}</td>
              <td className="py-3  px-8">
                <div className=" w-fit py-1 text-black  px-8 rounded-md border border-gray-300">
                  {item.quantity}
                </div>
              </td>
              <td className="  px-8 text-black">
                Rs. {paisaToNpr(item.linePrice)}
              </td>
              <td className="  px-8">
                <Button className="bg-white border-none w-fit h-fit p-0 hover:bg-white hover:text-red-100" onClick={() => handleRemoveItemFromCart(item.id)} >
                  <Trash2 color="#233E81" />
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
