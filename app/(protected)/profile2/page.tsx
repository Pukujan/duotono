import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetcher } from "@/lib/api/fetcher";
import DownloadTab from "@/components/Profile/DownloadTab";
import OrderTrackingTab from "@/components/Profile/OrderTrackingTab";
import FavouritesTab from "@/components/Profile/FavouritesTab";
import SubscriptionTab from "@/components/Profile/SubscriptionTab";
import DeviceTab from "@/components/Profile/DeviceTab";

export default async function Profile() {



  const res = await fetcher<any>({
    query: `query {
      activeCustomer {
        id
        emailAddress
        firstName
        lastName
        title
      }
    }`});

  const data = res.body.data.activeCustomer;

  return (
    <div className="min-h-full w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 py-5 relative">
      {/* profile details */}
      <div className="col-span-2 col-start-1 row-[1/2] min-h-[400px] min-w-[320px] max-w-[400px] justify-self-center lg:justify-normal bg-cream bg-opacity-30 flex flex-col items-center gap-y-4 pt-3 pb-12 px-4">
        <Avatar className="h-[100px] w-[100px] mt-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>

        <p className="text-xl font-bold">{data.firstName} {data.lastName}</p>

        <Button className="rounded-3xl bg-secondary w-full" data-id={data.id}>
          Edit Your Profile
        </Button>

        <ul className="list-none text-sm w-full px-3 flex flex-col gap-y-2">
          <li className="flex flex-col border-b border-[gray]">
            <span className="font-bold">Full Name</span>
            <span className="">{data.firstName} {data.lastName}</span>
          </li>

          <li className="flex flex-col border-b border-[gray]">
            <span className="font-bold">Type of user</span>
            <span className="">Individual</span>
          </li>

          <li className="flex flex-col border-b border-[gray]">
            <span className="font-bold">Email</span>
            <span className="">{data.emailAddress}</span>
          </li>

          <li className="flex flex-col border-b border-[gray]">
            <span className="font-bold">Payment Method</span>
            <span className="">Fonepay QR</span>
          </li>
        </ul>
      </div>

      {/* tabs */}
      <div className="flex flex-row gap-4 lg:row-[1/2] lg:ml-8  lg:col-[3/9] px-5 mt-[5em] lg:mt-[0em]">
        <Tabs
          defaultValue="Download"
          className="w-full flex flex-col"
        >
          <TabsList className="w-full h-auto flex justify-start gap-4 flex-wrap bg-white">
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Download"
            >
              Download
            </TabsTrigger>
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Order Tracking"
            >
              Order Tracking
            </TabsTrigger>
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Favourites"
            >
              Favourites
            </TabsTrigger>
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Print"
            >
              Print
            </TabsTrigger>
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Hire Designer"
            >
              Hire Designer
            </TabsTrigger>
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Devices"
            >
              Devices
            </TabsTrigger>
            <TabsTrigger
              className="bg-cream bg-opacity-30 rounded-3xl px-5 py-1.5 text-black data-[state=active]:bg-secondary data-[state=active]:text-white"
              value="Subscription"
            >
              Subscription
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Download">
            <DownloadTab />
          </TabsContent>
          <TabsContent value="Order Tracking">
            <OrderTrackingTab />
          </TabsContent>
          <TabsContent value="Favourites">
            <FavouritesTab />
          </TabsContent>
          <TabsContent value="Hire Designer">
            <h2>Hire Designer</h2>
          </TabsContent>
          <TabsContent value="Devices">
            <h2>Devices</h2>
            <DeviceTab />
          </TabsContent>
          <TabsContent value="Subscription">
            <SubscriptionTab />
          </TabsContent>
          <TabsContent value="Print">
            <h2>Print</h2>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
