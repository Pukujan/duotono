import { DownloadIcon, PencilIcon, PrinterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ImageProductCard({
  url,
  slug,
  alt = "product card image",
}: {
  url: string;
  slug: string;
  alt?: string;
}) {
  return (
    <div className="m-1 mb-6 shadow-md rounded-md">
      <div className="relative cursor-pointer">
          <Image
            src={url}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              borderRadius: "5px",
              cursor: "pointer",
              margin: 0,
            }}
            alt={alt}
          />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full rounded-[5px] w-full overflow-hidden bg-indigo-700/0 bg-fixed transition duration-300 ease-in-out group hover:bg-indigo-700/50">
        <Link href={`/products/${slug}`}>
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full rounded-[5px] w-full overflow-hidden bg-indigo-700/0 bg-fixed transition duration-300 ease-in-out group group-hover:bg-indigo-700/50"
          />
        </Link>
        <div className="flex-col gap-4 z-10 top-0 items-end absolute h-full w-fit mt-[3%] right-[3%] hidden group-hover:flex">
          <Link
            href={`/products/${slug}?action=download`}
            className="flex max-h-[20%]   w-fit items-center justify-center"
          >
            <DownloadIcon
              color="black"
              className="h-[100%] w-[auto] p-[3px] aspect-square bg-white rounded-md"
            />
          </Link>
          <Link
            href={`/products/${slug}?action=print`}
            className="flex max-h-[20%]  w-fit items-center justify-center"
          >
            <PrinterIcon
              color="black"
              className="h-[100%] w-[auto] p-[3px] aspect-square bg-white rounded-md"
            />
          </Link>
          <Link
            href={`/products/${slug}?action=hire`}
            className="flex max-h-[20%]  w-fit items-center justify-center"
          >
            <PencilIcon
              color="black"
              className="h-[100%] w-[auto] p-[3px] aspect-square bg-white rounded-md"
            />
          </Link>
        </div>
          {/* <div className="flex-col gap-4 items-end absolute h-full w-fit mt-[3%] right-[3%] hidden group-hover:flex">
            <Link
              href={`/products/${slug}?action=download`}
              className="flex max-h-[20%]   w-fit items-center justify-center"
            >
              <DownloadIcon
                color="black"
                className="h-[100%] w-[auto] p-[3px] aspect-square bg-white rounded-md"
              />
            </Link>
            <Link
              href={`/products/${slug}?action=print`}
              className="flex max-h-[20%]  w-fit items-center justify-center"
            >
              <PrinterIcon
                color="black"
                className="h-[100%] w-[auto] p-[3px] aspect-square bg-white rounded-md"
              />
            </Link>
            <Link
              href={`/products/${slug}?action=hire`}
              className="flex max-h-[20%]  w-fit items-center justify-center"
            >
              <PencilIcon
                color="black"
                className="h-[100%] w-[auto] p-[3px] aspect-square bg-white rounded-md"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}