import UserSignUpForm from "@/components/UserSignUpForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | Parivahan",
};

export default function SignUp() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full max-w-xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <UserSignUpForm />
          </div>
        </div>
      </section>
    </main>
  );
}