import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";

import config from "@/config/config.json";
import Appbar from "@/components/common/Appbar/Appbar";
import Footer from "@/components/common/Footer/Footer";
import FloatingBar from "@/components/common/FloatingBar/FloatingBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopLoadingBar from "@/components/common/Appbar/TopBar/TopLoadingBar";
import CountDown from "@/components/ui/countdown";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: config.brand_name,
  description: config.site_description,
};
const today = Date.now();
const launchDay = new Date("2023-09-18");
// const isLaunchDay = today < launchDay.getTime();
const isLaunchDay = true;
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <link
      rel="icon"
      href="/favicon.jpg"
      sizes="any"
    />

    <body
      suppressHydrationWarning
      className={inter.className}
    >

      <>
        <div className="px-[80px] my-[24px] container">
          <Appbar />
        </div>


        {children}

        <div
          className={dmSans.className}>

          <Footer />
        </div>
        <ToastContainer autoClose={1500} />
      </>

    </body>
  </html>
);

export default RootLayout;
