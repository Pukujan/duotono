"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useTransition } from "react";
import config from "@/config/config.json"
import Link from "next/link";
import NepaliDate from 'nepali-date-converter'
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { removeActiveDevice } from "@/lib/api";

NepaliDate.language = "np"

export default function TopBar({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [currentTime, setCurrentTime] = useState<string | null>("");
  const [isPending, startTransition] = useTransition();


  const router = useRouter();

  useEffect(() => {
    setCurrentTime(new NepaliDate(new Date()).toLocaleString());
  }, []);

  const handleLogout = () => {
    startTransition(async () => {
      await removeActiveDevice(localStorage.getItem("deviceInfo") || "")
      await signOut()
    })
  }

  return (
    <div className="w-full min-h-[30px] py-0 px-16 bg-primary text-white  items-center justify-between text-sm space-x-3 flex">
      {/* Navlinks */}
      <ul className="list-none lg:flex gap-x-5 items-center justify-center text-[12px] cursor-pointer flex-1/3 hidden">
        {config.routes.map((item, key) => {
          return (
            <li key={key}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          )
        })}

      </ul>

      {/* Date and time */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 justify-center items-center flex-1 py-3  md:flex-1/3 flex`}
        lang="ne"
      >
        {currentTime}
      </div>

      {/* Auth options */}
      <div className="hidden md:flex items-center justify-center flex-1/3 gap-x-12">
        {!isAuthenticated && <>
          <Link
            className="my-2"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="my-2"
            href={"/signup"}
          >
            Signup
          </Link>
        </>}

        {isAuthenticated && <Button variant={"ghost"} onClick={handleLogout} disabled={isPending} >{isPending ? "Please wait..." : "Logout"}</Button>}

      </div>
    </div>
  );
}
