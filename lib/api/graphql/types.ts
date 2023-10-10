/*
 * Add graphql types here
 */

export type SlugType = {
  params: {
    slug: string;
  };
};

export type CurrentUser = {
  id: string;
  identifier: string;
};

export type Success = {
  success: boolean;
};

export type AllProductsType = {
  data: {
    products: {
      items: {
        id: number;
        name: string;
        slug: string;
        variants?: [{ price?: number }];
        assets: [{ source?: string }];
      }[];
    };
  };
};

// For product card props
export type ProductCardPropsTypes = {
  name: string;
  slug: string;
  price: number | "";
  img: string;
};

export type SingleProductDetailType = {
  data: {
    product: {
      name: string;
      description: string;
      variants: [{ price: number }];
      assets: [{ source: string }];
    };
  };
  variables: { slug: string };
};
