import Carousel from "@/components/common/Carousel/Carousel";
import ProductForm from "@/components/products/ProductForm/ProductForm";
import ProductGrid from "@/components/products/ProductGrid/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { transformAllProductArray } from "@/lib/transformAllProductArray";
import { getAllProducts, getProductDetails, getCurrentUser } from "@/lib/api";
import { GetProductDetailsQueryResult } from "@/generated/graphql";
import LikeAndShare from "@/components/products/LikeAndShare/LikeAndShare";
import Link from "next/link";

export type ProductPriceDetails = {
  price: number;
  priceWithTax: number;
  taxRate: number;
  variantId: number | string;
};

export default async function ProductDetails({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const response = await getAllProducts({ options: { take: 30, skip: 0 } });
  const transformedData = transformAllProductArray(response.data);

  // check if user is authenticated

  const user = await getCurrentUser();
  let isAuthenticated: boolean;

  if (!(user.activeCustomer?.__typename == "Customer")) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }

  const productDetailResponse: GetProductDetailsQueryResult =
    await getProductDetails({ slug });

  const customFields = productDetailResponse.data?.product?.customFields;

  const tags = productDetailResponse.data?.product?.facetValues;

  const product = productDetailResponse.data?.product;

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  const variant = product.variants[0];
  const priceDetails: ProductPriceDetails = {
    price: variant.price,
    priceWithTax: variant.priceWithTax,
    taxRate: variant.taxRateApplied.value,
    variantId: variant.id,
  };

  return (
    <div>
      {/* product details */}
      <section className="flex flex-col gap-y-5">
        {/* carousel and form */}
        <div className="flex gap-x-5 flex-col lg:flex-row">
          {/* carousel */}
          <div className="flex-[0.65] h-auto mt-6">
            <div>
              <Carousel
                images={product.carousel_images.map((item: any) => item.source)}
                slides={Array.from(product.carousel_images.keys())}
              />
            </div>
            {/* description */}
            <div className="flex flex-col gap-y-5 p-[1.6rem]">
              {/* header with description */}
              <div className="flex justify-between">
                {/* title */}
                <span className="text-lg md:text-2xl lg:text-3xl text-info2 capitalize">
                  {product.name}
                </span>
                <div className="flex gap-x-3">
                  <LikeAndShare productId={product.id} />
                </div>
              </div>

              <div className="text-sm grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1">
                  <div>
                    <span className="font-bold">Model ID: &nbsp;</span>
                    <span className="font-light">{product.id}</span>
                  </div>
                  <div className="mt-2 md:mt-10">
                    <span className="font-bold">Design Tips (For Print):</span>

                    <div>
                      <span className="font-bold">Size: &nbsp;</span>
                      <span className="font-light">
                        {`${customFields?.width || "None"} x ${customFields?.height || "None"}`}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold">Resolution: &nbsp;</span>
                      <span className="font-light">{customFields?.resolution || "None"}</span>
                    </div>

                    <div>
                      <span className="font-bold">Color Mode: &nbsp;</span>
                      <span className="font-light">{customFields?.colorMode || "None"}</span>
                    </div>
                  </div>
                </div>

                <div className="relative -top-[13px] col-span-3 mt-3 md:mt-0">
                  <div>
                    <span className="font-bold">Related tags: &nbsp;</span>
                    <span className="gap-3">
                      {!tags?.length && <p>No tags</p>}
                      {
                        !!tags?.length && tags.map((item, key) => {
                          return (
                            <Link href={`/search?fid=${item.id}&tag=${item.name}`} >
                              <Badge
                                variant="secondary"
                                className="mr-3 mt-3 px-3 rounded-md bg-white cursor-pointer border-info2"
                                key={key}
                              >
                                {item.name}
                              </Badge></Link>

                          )
                        })
                      }

                    </span>
                  </div>

                  {/* description */}
                  <div className="mt-3">
                    <div className="font-bold">Description</div>
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* product action form */}
          <div className="flex-[0.35] mt-4">
            <ProductForm
              imageDetails={product.carousel_images[0]}
              isAuthenticated={isAuthenticated}
              priceDetails={priceDetails}
              customFields={customFields}
            />
          </div>
        </div>
      </section>

      {/* related assets */}
      <section className="md:p-[1.6rem]">
        <h3 className="text-info2">You might also like</h3>

        <div className="py-5">
          <ProductGrid
            imageLinks={transformedData}
            totalItems={0}
          />
        </div>
      </section>
    </div>
  );
}
