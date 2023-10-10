"use client"
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SearchBar() {

  const router = useRouter()
  const [q, setQ] = useState("")

  const handleSearch = () => {
    if (!q) return;
    router.push("/search?q=" + q)
  }

  return (
    <div className="flex items-center">


      <SearchIcon size={18} />

      <input className="w-full text-[14px] px-1 focus:outline-none" type="text"
        placeholder="Quick search for anything"
        value={q} onChange={(e) => setQ(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") return handleSearch()
        }} />

    </div>
  )
}
