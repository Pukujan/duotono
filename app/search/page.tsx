import CategoryFilter from "@/components/filter/CategoryFilter/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid/ProductGrid";
import { SortFilter, FilterOptions } from "@/components/filter/FilterButtons"

import { ProductType, transformAllProductArray } from "@/lib/transformAllProductArray";
import { getAllProducts, searchProduct } from "@/lib/api";
import { SearchProductQueryResult, SearchProductQueryVariables } from "@/generated/graphql";

export default async function Search({
  searchParams
}: {
  searchParams: { [key: string]: string }
}) {

  const searchTerm: string = searchParams.q;
  const fid: string = searchParams.fid;


  const inputVariables: SearchProductQueryVariables = {
    input: {
      term: searchParams.q ? searchTerm : null,
      take: 30,
      facetValueFilters: searchParams.fid ? [{ or: [fid || "s"] }] : null
    }
  }


  const { data } = await searchProduct(inputVariables);
  if (data.search.length <= 0) {
    return <h1>No item found.</h1>
  }

  const transformedData = transFormSearchData(data);



  function transFormSearchData(data: any): ProductType[] {
    console.log("here", data)
    const finalData = data.search.items.map((item: any) => {
      return { slug: item.slug, imageUrl: item.productAsset.preview, alt: item.slug + "image" }
    })
    return finalData
  }


  return (
    <div>
      <CategoryFilter />

      {/* filters and result title */}
      <div className="flex justify-between  items-center py-3 mt-5">

        <FilterOptions />

        <p className="text-lg mx-2 font-[100] md:text-2xl"> Showing Results For: <span className="font-bold"> {(searchParams.q ? searchParams.q : searchParams.tag) || ""}</span> </p>

        <SortFilter />
      </div>

      <div className="py-5">
        <ProductGrid imageLinks={transformedData} totalItems={0} />
      </div>

    </div>
  )
}
