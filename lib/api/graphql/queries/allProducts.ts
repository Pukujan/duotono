export const allProductsQuery = /* GraphQL */ `
  query {
    products {
      items {
        id
        name
        slug
        description
        variants {
          id
          price
        }
        assets {
          source
        }
      }
    }
  }
`;
