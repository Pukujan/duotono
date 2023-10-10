// using any type now for experimenting with grapgql. will change it later.

export type ProductType = {
  slug: string;
  imageUrl: string;
  alt: string;
};

export function transformAllProductArray(data: any): ProductType[] {
  return data.products.items.map((item: any) => {
    return {
      slug: item.slug,
      imageUrl: item.assets[0].source,
      alt: item.assets[0].name,
    };
  });
}
