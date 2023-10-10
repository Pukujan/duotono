import { errorResultFragment } from "../fragments/error-result";

export const addItemToOrderMutation = /* GraphQL */ `
  mutation {
    addItemToOrder(productVariantId: $number, quantity: $number) {
      __typename
      ... on Order {
        id
        lines {
          unitPrice
          quantity
        }
      }
      ...ErrorResult
    }
  }

  ${errorResultFragment}
`;
