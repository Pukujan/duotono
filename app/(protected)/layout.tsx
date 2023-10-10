

import React from 'react'
import { getCurrentUser } from '@/lib/api';
import { redirect } from 'next/navigation';

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

    const user = await getCurrentUser()

    if (!(user.activeCustomer?.__typename == "Customer")) {
       redirect("/login")
        return
    }
    return (
        <>
            {children}
        </>
    )
}

export default RootLayout;