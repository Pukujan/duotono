import "server-only";
import { cookies } from "next/headers";

import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const { BACKEND_URL } = process.env;

export const { getClient } = registerApolloClient(() => {
  const cookieStore = cookies();
  const token = cookieStore.get("vendure-auth-token")?.value;

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: BACKEND_URL as string,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }),
  });
});
