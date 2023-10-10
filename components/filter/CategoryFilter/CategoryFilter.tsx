import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        name: "Popular Design"
    },
    {
        name: "Business Card"
    },
    {
        name: "Visiting Card"
    },
    {
        name: "ID Card"
    },
    {
        name: "Banner"
    },
    {
        name: "Pamphlets"
    },
    {
        name: "Photo"
    },
]

export default function CategoryFilter() {
    return (
        <div className="w-full pb-4 h-fit relative flex">
            <div className="category-filters px-[45px] pt-4 flex gap-x-4 overflow-x-auto">
                {
                    categories.map((category) => (
                        <Button variant="secondary" className="grid place-items-center h-fit whitespace-nowrap px-3 text-black font-light text-md hover:bg-info2">
                           <Link href={`/search?q=${category.name}`}> {category.name} </Link>
                        </Button>
                    ))
                }
            </div>

            {/* left right buttons */}
            {/* right button */}
            <div className="absolute right-0 -top-[8px] lg:top-[2px] h-full w-[40px] flex justify-center items-center cursor-pointer">
                <ChevronRightIcon size={50} color="#9F9F9F" />
            </div>

            {/* left button */}
            <div className="absolute left-0 -top-[8px] lg:top-[2px] h-full w-[40px] flex justify-center items-center cursor-pointer">
                <ChevronLeftIcon size={50} color="#9F9F9F" />
            </div>

        </div>
    )
}
