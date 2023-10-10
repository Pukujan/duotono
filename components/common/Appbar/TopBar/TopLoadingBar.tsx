"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function TopLoadingBar() {
  return (
    <ProgressBar
      height="4px"
      color="#f00"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
