import 'server-only';

import { cookies } from 'next/headers';

const { BACKEND_URL } = process.env;

type ExtractVariables<T> = T extends { variables: object }
  ? T['variables']
  : never;

export const fetcher = async <T>({
  cache,
  headers,
  query,
  variables,
  next,
}: {
  query: string;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  //
  //
  // TODO:
  // update types to return error in body body: T | ErrorType
  //
  //
}): Promise<{ status: number; body: T } | never> => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('vendure-auth-token')?.value;

    const res = await fetch(`${BACKEND_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // send token if it exists (for all requests made using this fetcher)
        Authorization: token ? `Bearer ${token}` : '',
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(next && { next: { ...next } }),
    });

    const body = await res.json();

    if (!res.ok) {
      throw new Error(body.message);
    }

    return { status: res.status, body };
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
};
