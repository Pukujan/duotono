"use client"

import React, { useEffect } from 'react'
import { verifyCustomerAccount } from '@/lib/api'
import OpenMail from '@/components/UserSignUpForm/icons/open-mail';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Page = () => {
    let emailVerificationSuccess: boolean = false;
    const params = new URLSearchParams(window.location.search);
    const getVerificationStatus = async () => {
        const token = params.get("token") || "no token";
        const response = await verifyCustomerAccount(token);
       
        if(response.verifyCustomerAccount.__typename === "CurrentUser") {
            emailVerificationSuccess = true
            toast.success("User verification successful.")
        } else {
            toast.error("Cannot verify user.")
        }

    }

    useEffect(() => {
        getVerificationStatus();
    }, [])

    return (
        <div className="mt-8 flex flex-col justify-center items-center gap-10 flex-wrap text-center">

            {
                emailVerificationSuccess ? (
                    <div>
                        <OpenMail
                            size={200}
                            viewBox="0 0 150 128"
                            fill="#5ACC93"
                        />
                        <h2>Your email has been verified</h2>
                        <Link href='/login'>
                            <Button>Login</Button>
                        </Link>
                    </div>
                ) :
                    (
                        <div>
                            <OpenMail
                                size={200}
                                viewBox="0 0 150 128"
                                fill="#FF0000"
                            />
                            <h2>Email verification error. Contact support team.</h2>
                            <Link href='/'>
                                <Button>Go to Homepage</Button>
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

export default Page