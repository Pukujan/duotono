import { getCurrentUser } from "@/lib/api";
import Navbar from "./Navbar/Navbar";
import TopBar from "./TopBar/TopBar";

export default async function Appbar() {

  const user = await getCurrentUser()
  let isAuthenticated: boolean;

  if (!(user.activeCustomer?.__typename == "Customer")) {
    isAuthenticated = false
  } else {
    isAuthenticated = true
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
    </>
  )
}
