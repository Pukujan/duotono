"use client";
import React, { useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { AvailableCountriesQuery } from "@/generated/graphql";
import { createOrderShippingAddress, getAvailableCountries, setOrderShippingMethod, transitionOrderState } from "@/lib/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ShippingAddressForm() {
    const [streetLine1, setStreetLine1] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const router = useRouter();

    const [availableCountries, setAvailableCountries] =
        useState<AvailableCountriesQuery | null>(null);

    const [isPending, startTransition] = useTransition();

    /**
     * fetch available countries when the page loads
     */
    useEffect(() => {
        startTransition(async () => {
            try {
                const response = await getAvailableCountries();
                setAvailableCountries(response);
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong.");
            }
        });
    }, []);

    const handleAddShippingAddress = async () => {
        startTransition(async () => {
            try {

                const response = await createOrderShippingAddress({
                    input: {
                        fullName,
                        phoneNumber,
                        streetLine1,
                        city,
                        countryCode,
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

                router.refresh()
                router.push("/checkout/payment")

            } catch (error: any) {
                toast.error(error.message)
            }

        });
    };

    return (
        <div className="py-5 w-full max-w-[400px] flex flex-col gap-y-10">
            <div>
                <label htmlFor="fullName">Full Name</label>
                <Input
                    value={fullName}
                    id="fullName"
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="streetLine1">Phone Number</label>
                <Input
                    value={phoneNumber}
                    id="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+977 980000000"
                />
            </div>

            <div>
                <label htmlFor="streetLine1">Street Line 1</label>
                <Input
                    value={streetLine1}
                    id="streetLine1"
                    onChange={(e) => setStreetLine1(e.target.value)}
                    placeholder="Street Name"
                />
            </div>

            <div>
                <label htmlFor="city">City</label>
                <Input
                    value={city}
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City Name"
                />
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <Select onValueChange={(value) => setCountryCode(value)}>
                    <SelectTrigger id="country">
                        <SelectValue placeholder="Select Countrt" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Country</SelectLabel>
                            {isPending && <SelectLabel>Loading ...</SelectLabel>}
                            {availableCountries?.availableCountries &&
                                availableCountries?.availableCountries.map((item, key) => (
                                    <SelectItem
                                        key={key}
                                        value={item.code}
                                    >
                                        {item.name}
                                    </SelectItem>
                                ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <Button onClick={handleAddShippingAddress} disabled={isPending} >Add Shipping Address</Button>
        </div>
    );
}
