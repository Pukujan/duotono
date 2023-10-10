import { errorResultFragment } from "../fragments/error-result";

export const registerCustomerAccountMutation = /* GraphQL */ `
  mutation RegisterCustomer($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
      __typename
      ... on Success {
        success
      }
      ...ErrorResult
    }
  }

  ${errorResultFragment}
`;