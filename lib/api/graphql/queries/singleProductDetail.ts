export const singleProductDetailQuery = /* GraphQL */ `
  query ($slug: String) {
    product(slug: $slug) {
      name
      description
      assets {
        source
      }
      variants {
        price
      }
    }
  }
`;
