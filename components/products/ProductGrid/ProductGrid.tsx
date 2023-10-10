import ImageProductCard from "../ImageProductCard/ImageProductCard";
import "./css/ProductGrid.css";
import Image from "next/image";
import { ProductType } from "@/lib/transformAllProductArray";
import Link from "next/link";

type ProductGridProps = {
    imageLinks: ProductType[];
    totalItems: number;
};

export default function ProductGrid({ imageLinks, totalItems }: ProductGridProps) {
    const numberOfColumns = 4;

    // Calculate the number of images per column
    const imagesPerColumn = Math.ceil(imageLinks.length / numberOfColumns);

    console.log({totalItems})

    // Split the image links into arrays for each column
    const columnArrays: ProductType[][] = [];
    for (let i = 0; i < numberOfColumns; i++) {
        const startIndex = i * imagesPerColumn;
        const endIndex = startIndex + imagesPerColumn;
        const columnArray = imageLinks.slice(startIndex, endIndex);
        columnArrays.push(columnArray);
    }

    return (
        <div className="row">
            <div className="column mx-5">
                {columnArrays[0].map((item, key) => (
                    <ImageProductCard url={item.imageUrl} alt={item.alt} slug={item.slug} key={key} />
                ))}
            </div>

            <div className="column">
                {columnArrays[1].map((item, key) => (
                    <ImageProductCard url={item.imageUrl} alt={item.alt} slug={item.slug} key={key} />
                ))}
            </div>

            <div className="column">
                {columnArrays[2].map((item, key) => (
                    <ImageProductCard url={item.imageUrl} alt={item.alt} slug={item.slug} key={key} />
                ))}
            </div>

            <div className="column">
                {columnArrays[3].map((item, key) => (
                    <ImageProductCard url={item.imageUrl} alt={item.alt} slug={item.slug} key={key} />
                ))}
            </div>


            {/* pagination */}
            {totalItems > 0 && <nav className="flex items-center space-x-2 w-full justify-center">
                <a className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </a>


                {
                    totalItems > 0 && Array.from(Array(Math.ceil(Number(totalItems) / 30))).map((item, key) => (
                            <Link key={key} className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href={`/?skip=${key * 30}&take=${30}`} aria-current="page">{key + 1}</Link>
                        ))
                }


                <a className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                    <span className="sr-only">Next</span>
                    <span aria-hidden="true">»</span>
                </a>
            </nav>}

        </div>
    );
}
