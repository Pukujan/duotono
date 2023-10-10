import "server-only";

import { cookies } from "next/headers";

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { loginMutation } from "./api/graphql/mutations/login";
import { getMe, logOut } from "./api";

const { BACKEND_URL } = process.env;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@mail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter your email and password");
        }

        // we cannot use our fetcher here because,
        // we need to set the cookie manually
        const res = await fetch(`${BACKEND_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: loginMutation,
            variables: {
              username: credentials.email,
              password: credentials.password,
            },
          }),
          cache: "no-cache",
        });

        if (!res.ok) {
          throw new Error("Something went wrong.");
        }

        const body = await res.json();

        // eslint-disable-next-line no-underscore-dangle
        const typeName = body.data.login.__typename;

        if (typeName === "CurrentUser") {
          const token = res.headers.get("vendure-auth-token");

          if (!token) {
            throw new Error("Something went wrong.");
          }

          const cookieStore = cookies();
          cookieStore.set("vendure-auth-token", token, {
            sameSite: "lax",
          });

          return {
            id: body.data.login.id,
            email: body.data.login.identifier,
          };
        }

        throw new Error(body.data.login.message);
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: async ({ session }) => {
      const data = await getMe();

      if (!data.me) {
        throw new Error("Not authenticated");
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: data.me?.id,
          email: data.me?.identifier,
        },
      };
    },
    jwt: async ({ token, trigger, user }) => {
      if (trigger === "signIn") {
        return { ...token, ...user };
      }
      return token;
    },
  },
  events: {
    /**
     * Call backend sign out api
     *
     * @warning This doesn't guarantee that the user is signed out from the backend
     *          as errors will be discarded by next-auth.
     */
    signOut: async () => {
      try {
        await logOut();
        // Delete the token from the cookie store
        const cookieStore = cookies();
        cookieStore.delete("vendure-auth-token");
      } catch (error) {
        // ignore
        // console.log(error);
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
};
