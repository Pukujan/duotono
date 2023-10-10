"use client";

import Link from "next/link";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools"; // eslint-disable-line import/no-extraneous-dependencies
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "@/schemas/loginSchemas";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { addActiveDevice } from "@/lib/api";
import { uuid } from "uuidv4";

type FormData = z.infer<typeof loginSchemas>;

export default function UserLoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [deviceInfo, setDeviceInfo] = useState<string>("")

  useEffect(() => {
    setDeviceInfo(uuid())
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchemas),
  });

  const handleLogin = () => { };

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      setLoading(true);
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        //
        // This currently doesn't work
        //
        // callbackUrl:  '/',
      });
      setLoading(false);
      if (!response?.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      if (response.error) {
        throw new Error(response.error);
      }
      await addActiveDevice(deviceInfo)
      localStorage.setItem("deviceInfo", deviceInfo);
      router.refresh()
      router.push("/profile2");
      toast.success("Login Successfull!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      setLoading(false);
      toast.error("Oops.. Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>

      <main>
        <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full max-w-xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

              <h1 className="font-bold text-secondary  text-4xl py-8">
                Welcome back
              </h1>
              <form
                className="space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    className="block w-full p-2.5 focus:outline-none focus:border-b-primary bg-transparent border"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 p-1">{errors.email?.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium  focus:border-b-primary "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="*********"
                    className="block w-full p-2.5 focus:outline-none focus:border-b-primary bg-transparent border"
                  />{" "}
                  {errors.password && (
                    <p className="text-red-600 p-1">{errors.password?.message}</p>
                  )}
                </div>
                <div className="flex items-start mb-6">
                  <Link
                    href="forgot-password"
                    className="text-[13px] italic"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div>
                  <h3 className="text-base font-medium text-center">
                    Don&rsquo;t have an account ? &nbsp;
                    <Link
                      className="text-primary"
                      href="/signup"
                    >
                      Sign up
                    </Link>
                  </h3>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-1/2 md:w-[30%] bg-primary text-white py-3 font-bold rounded-lg hover:bg-white border-2 border-white transition-all duration-400 ease-in-out hover:border-[#e4e4e4] hover:text-primary"
                >
                  {loading ? "Please wait..." : "Login"}
                </button>
                <h4 className="text-center font-normal">or</h4>
                <div className="mt-4">
                  <GoogleOAuthProvider clientId="YOUR CLIENT ID">
                    <GoogleLogin onSuccess={handleLogin} />
                  </GoogleOAuthProvider>{" "}
                </div>
              </form>
              <DevTool control={control} />

            </div>
          </div>
        </section>
      </main>

    </>
  );
}
