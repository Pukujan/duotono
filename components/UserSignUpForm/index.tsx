"use client";

import Link from "next/link";
import { useState, useTransition } from "react";

import { useForm } from "react-hook-form";

import { registerCustomerAccount } from "@/lib/api";
import OpenMail from "./icons/open-mail";

type RegisterCustomerAccountFormValues = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
};

export default function UserSignUpForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterCustomerAccountFormValues>();
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: RegisterCustomerAccountFormValues) => {
    startTransition(async () => {
      const res = await registerCustomerAccount(data);
      const resData = res.registerCustomerAccount;

      // eslint-disable-next-line no-underscore-dangle
      if (resData.__typename === "Success") {
        setIsSuccess(true);
      } else {
        setError("root", {
          type: "custom",
          message: resData.message,
        });
      }
    });
  };

  if (isSuccess) {
    return (
      <div className="mt-8 flex flex-col justify-center items-center gap-10 flex-wrap text-center">
        <OpenMail
          size={200}
          viewBox="0 0 150 128"
          fill="none"
        />
        <h2>Verify your email</h2>
        <p className="text-xl text-primary max-w-2xl">
          We have sent you an email for verification. <br />
          If you didn&apos;t see it, please check your spam or promotions. Wait
          upto 1-2 minutes.
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="font-bold text-secondary  text-4xl py-8">
        Signup for a new account
      </h1>
      <form
        className="space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium "
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="block w-full p-2.5 focus:outline-none focus:border-b-primary bg-transparent border"
            placeholder="John"
            disabled={isPending}
            {...register("firstName", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium  focus:border-b-primary "
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            disabled={isPending}
            className="block w-full p-2.5 focus:outline-none focus:border-b-primary bg-transparent border"
            {...register("lastName", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  focus:border-b-primary "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@example.com"
            disabled={isPending}
            className="block w-full p-2.5 focus:outline-none focus:border-b-primary bg-transparent border"
            {...register("emailAddress", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium  focus:border-b-primary "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            disabled={isPending}
            className="block w-full p-2.5 focus:outline-none focus:border-b-primary bg-transparent border"
            {...register("password", { required: true })}
          />
        </div>

        {errors.root && (
          <p className="text-[red] mt-2 ml-1"> {errors.root.message} </p>
        )}

        <p className="font-normal">
          Already have an account?
          <Link
            href="/login"
            className="font-medium"
          >
            <span className="text-primary">Login here</span>
          </Link>
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-1/2 md:w-[30%] bg-primary text-white py-3 font-bold rounded-lg hover:bg-white border-2 border-white transition-all duration-400 ease-in-out hover:border-[#e4e4e4] hover:text-primary"
        >
          {isPending ? "Please wait..." : "Sign Up"}
        </button>
      </form>
    </>
  );
}