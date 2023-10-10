"use client"
import { Button } from "@/components/ui/button"
import { addFavourite } from "@/lib/api";
import { HeartIcon, Share2Icon } from "lucide-react"
import { useTransition } from "react";
import { toast } from "react-toastify";

type LikeAndSharePropsType = {
    productId: string;
}

export default function LikeAndShare({ productId }: LikeAndSharePropsType) {

    const [isPending, startTransition] = useTransition();

    const handleAddToFavourite = async () => {
        startTransition(async () => {
            await addFavourite(productId);

            toast.success("Item added to favourites.")
        })
    }

    return (
        <>
            <Button
                variant="secondary"
                className="flex gap-x-2"
                onClick={handleAddToFavourite}
            >
                <HeartIcon size={17} />
                <span className="hidden md:inline text-[1.15em]">{isPending ? "Wait ..." : "Like"}</span>
            </Button>
            <Button
                variant="secondary"
                className="flex gap-x-2"
            >
                <Share2Icon size={17} />
                <span className="hidden md:inline text-[1.15em]">Share</span>
            </Button>
        </>
    )
}
