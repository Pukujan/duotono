import { errorResultFragment } from '../fragments/error-result';

export const loginMutation = /* GraphQL */ `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      __typename
      ... on CurrentUser {
        id
        identifier
      }
      ...ErrorResult
    }
  }
  ${errorResultFragment}
`;
