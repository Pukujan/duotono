import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type {
  EsewaInit,
  EsewaRequestPayload,
  KhaltiInit,
  KhaltiInitSuccessResponse,
} from '@/types/payment';

export type { Strategies } from '@/types/payment';

type PaymentInit =
  | {
      strategy: 'esewa';
      config: EsewaInit;
    }
  | {
      strategy: 'khalti';
      config: KhaltiInit;
    };

const ESEWA_PAYMENT_API = process.env.NEXT_PUBLIC_ESEWA_PAYMENT_API as string;
const ESEWA_MERCHANT_CODE = process.env
  .NEXT_PUBLIC_ESEWA_MERCHANT_CODE as string;
const ESEWA_SUCCESS_URL = process.env.NEXT_PUBLIC_ESEWA_SUCCESS_URL as string;
const ESEWA_FAILURE_URL = process.env.NEXT_PUBLIC_ESEWA_FAILURE_URL as string;

const postForm = (url: string, payload: Record<string, string | number>) => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = url;

  Object.entries(payload).forEach(([key, value]) => {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = key;
    hiddenField.value = String(value);
    form.appendChild(hiddenField);
  });

  document.body.appendChild(form);
  form.submit();
};

const initiateEsewaPayment = (config: EsewaInit) => {
  const { amt, pid, pdc = 0, psc = 0, txAmt = 0 } = config;
  const payload: EsewaRequestPayload = {
    amt,
    pdc,
    psc,
    txAmt,
    tAmt: amt + pdc + psc + txAmt,
    pid,
    scd: ESEWA_MERCHANT_CODE,
    su: ESEWA_SUCCESS_URL,
    fu: ESEWA_FAILURE_URL,
  };

  postForm(ESEWA_PAYMENT_API, payload);
};

const initiateKhaltiPayment = async (config: KhaltiInit) => {
  const initiateResponse = await fetch('/api/payment/khalti/initiate-payment', {
    method: 'POST',
    body: JSON.stringify(config),
  });

  if (!initiateResponse.ok) {
    throw new Error('Error initializing payment.');
  }

  const data = await initiateResponse.json();

  //
  //
  // TODO: Fix khalti types
  //
  if (data.pidx) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { pidx, payment_url } = data as KhaltiInitSuccessResponse;
    //
    // TODO: save pidx somewhere
    //
    console.log(pidx);
    //
    return { redirect: payment_url };
  }

  console.log(data);
  throw new Error('Error initializing payment.');
};

export const usePayment = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const resetError = () => setError(undefined);

  const createPayment = async ({ strategy, config }: PaymentInit) => {
    try {
      setLoading(true);
      if (strategy === 'esewa') {
        initiateEsewaPayment(config);
      } else if (strategy === 'khalti') {
        const { redirect } = await initiateKhaltiPayment(config);
        router.push(redirect);
      }
    } catch (err) {
      setLoading(false);
      // console.log((err as Error).message);
      if ((err as Error).cause === 'NotImplemented') {
        setError((err as Error).message);
      } else {
        setError('Error initializing payment.');
      }
    }
  };

  return { createPayment, error, resetError, loading };
};
