import { getActiveOrders , getEligiblePaymentMethods } from "@/lib/api";
import { ActiveOrdersQuery } from "@/generated/graphql";
import ActiveOrderTable from "@/components/Checkout/ActiveOrderTable";
import { paisaToNpr } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default async function page() {
    const activeOrders: ActiveOrdersQuery = await getActiveOrders();

    if (!activeOrders?.activeOrder || activeOrders.activeOrder.lines.length <= 0) return (
        <div className="col-span-full xl:col-[1/8]">
            <h3>Active orders not found.</h3>
        </div>
    )

   
    return (
        <>
            <div className="col-span-full xl:col-[1/8] overflow-x-scroll">
                <ActiveOrderTable activeOrders={activeOrders} />{" "}
            </div>
            <div className="p-3 pb-12 col-span-full justify-self-center xl:col-[9/12] min-w-[350px] max-w-[350px] h-[300px] flex flex-col items-center gap-12 bg-accent">
                <h1 className="text-2xl font-bold">Cart Totals</h1>
                <div className="w-full flex flex-col gap-6 justify-between">
                    <div className="flex flex-row justify-between">
                        <p>Subtotal</p>
                        <p className="opacity-70">
                            Rs. {paisaToNpr(activeOrders.activeOrder?.subTotal)}
                        </p>
                    </div>

                    <div className="flex flex-row justify-between">
                        <p>Tax Rate</p>
                        <p className="opacity-70">
                            {activeOrders.activeOrder?.taxSummary[0]?.taxRate || 0}%
                        </p>
                    </div>

                    <div className="flex flex-row justify-between">
                        <p>Total</p>
                        <p className="text-lg">
                            Rs. {paisaToNpr(activeOrders.activeOrder?.totalWithTax)}
                        </p>
                    </div>
                    {
                        activeOrders.activeOrder.lines[0].customFields?.orderType === "download" ? 
                        (
                            <Button 
                                className="w-fit  px-8 rounded-lg self-center bg-secondary font-bold"
                            >
                                <Link href="/checkout/download">Download</Link>
                            </Button>
                        ): (
                            <Button className="w-fit  px-8 rounded-lg self-center bg-secondary font-bold">
                                <Link href="/checkout/shipping_address">Check Out</Link>
                            </Button>
                        )
                    }
                </div>
            </div>
        </>
    );
}
