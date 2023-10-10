"use server";

import "server-only";

import {
  ActiveOrdersDocument,
  ActiveOrdersQuery,
  ActiveOrdersQueryResult,
  AddItemToOrderDocument,
  AddPaymentToOrderDocument,
  AddPaymentToOrderMutation,
  AddPaymentToOrderMutationVariables,
  AllProductsDocument,
  AllProductsQueryVariables,
  AllSubscriptionPackagesDocument,
  AvailableCountriesDocument,
  AvailableCountriesQuery,
  GetCurrentUserDocument,
  GetCurrentUserQuery,
  GetOrderHistoryDocument,
  GetOrderHistoryQuery,
  GetProductDetailsDocument,
  GetProductDetailsQueryResult,
  GetProductDetailsQueryVariables,
  OrderLineCustomFieldsInput,
  RemoveItemFromCartDocument,
  RemoveItemFromCartMutation,
  SearchInput,
  SearchProductDocument,
  SearchProductQueryVariables,
  SetOrderShippingAddressDocument,
  SetOrderShippingAddressMutation,
  SetOrderShippingAddressMutationVariables,
  SetOrderShippingMethodDocument,
  SetOrderShippingMethodMutation,
  SetOrderShippingMethodMutationVariables,
  TransitionOrderToStateDocument,
  TransitionOrderToStateMutation,
  TransitionOrderToStateMutationVariables,
  AddSubscriptionToOrderDocument,
  EligiblePaymentMethodsDocument,
  EligiblePaymentMethodsQuery,
  GetActiveSubscriptionDocument,
  GetActiveSubscriptionQuery,
  GetDownloadableAssetsDocument,
  GetDownloadableAssetsQuery,
  VerifyCustomerAccountDocument,
  VerifyCustomerAccountMutation,
  GetFavouritesDocument,
  GetFavouritesQuery,
  AddFavouriteDocument,
  AddFavouriteMutation,
  GetCurrentSubscriptionPackageDocument,
  GetCurrentSubscriptionPackageQuery,
  AddActiveDeviceDocument,
  RemoveActiveDeviceDocument,
  GetActiveDeviceDocument,
  GetActiveDeviceQuery,
  GetQrImageDocument,
  GetQrImageQuery,
  GetBannersDocument,
  GetBannersQuery,
} from "@/generated/graphql";
import { fetcher } from "./fetcher";
import { meQuery } from "./graphql/queries/me";
import { logOutMutation } from "./graphql/mutations/logout";
import { registerCustomerAccountMutation } from "./graphql/mutations/registerCustomerAccount";
import type {
  CurrentUser,
  SingleProductDetailType,
  Success,
} from "./graphql/types";
import { singleProductDetailQuery } from "./graphql/queries/singleProductDetail";
import { getClient } from "./client";
/**
 *
 * Example query
 *
 * @returns - All products
 */
export const getAllProducts = async (variables: AllProductsQueryVariables) => {
  const apolloClient = getClient();

  const response = await apolloClient.query({
    query: AllProductsDocument,
    variables,
  });

  return response;
};

/**
 *
 * Example query
 *
 * @returns - Returns All Subscription Packages
 */

export const getAllSubscriptionPackages = async () => {
  const apolloClient = getClient();
  const response = await apolloClient.query({
    query: AllSubscriptionPackagesDocument,
  });
  return response;
};

/**
 *
 * Subscription query
 *
 * @returns - Returns active subscription details of logged in user.
 */

export const getActiveSubscription = async () => {
  const response = await getClient().query({
    query: GetActiveSubscriptionDocument,
  });
  const data: GetActiveSubscriptionQuery = response.data;

  return data;
};

/**
 *
 * Subscription package query
 *
 * @returns - Returns active subscription package details.
 */

export const getCurrentSubscriptionPackage = async () => {
  const activeSubscriptionResponse = await getActiveSubscription();

  if (!activeSubscriptionResponse.activeSubscription?.id) {
    return null;
  }

  const response = await getClient().query({
    query: GetCurrentSubscriptionPackageDocument,
    variables: { id: activeSubscriptionResponse.activeSubscription.packageId },
  });

  const subscriptionPackageDetails: GetCurrentSubscriptionPackageQuery =
    response.data;

  return { ...activeSubscriptionResponse, ...subscriptionPackageDetails };
};

/**
 *
 * Add active device
 */

export const addActiveDevice = async (name: String) => {
  await getClient().mutate({
    mutation: AddActiveDeviceDocument,
    variables: { name },
  });
};

/**
 *
 * Remove active device
 */

export const removeActiveDevice = async (name: String) => {
  await getClient().mutate({
    mutation: RemoveActiveDeviceDocument,
    variables: { name },
  });
};

/**
 *
 *
 * @returns list of active devices
 */

type ActiveDevices =
  | {
      name: string;
      ip: string;
      datetime: string;
    }[]
  | [];

export const getActiveDevices = async () => {
  const response = await getClient().query({ query: GetActiveDeviceDocument });

  const data: GetActiveDeviceQuery = response.data;
  const devices: ActiveDevices = JSON.parse(
    data.activeCustomer?.customFields?.activeDevices || "[]"
  );
  return devices;
};

/**
 *
 * @returns qr code for payment
 */

export const getQrImage = async () => {
  const response = await getClient().query({ query: GetQrImageDocument });

  const data: GetQrImageQuery = response.data;

  return data;
};

/**
 *
 *
 * @returns Banner images
 */

export const getBanners = async () => {
  const response = await getClient().query({ query: GetBannersDocument });
  const data: GetBannersQuery = response.data;

  return data;
};

export const searchProduct = async (input: SearchProductQueryVariables) => {
  const apolloClient = getClient();

  const response = await apolloClient.query({
    query: SearchProductDocument,
    variables: input,
  });

  return response;
};

export const getProductDetails = async (
  slug: GetProductDetailsQueryVariables
): Promise<GetProductDetailsQueryResult | any> => {
  const apolloClient = getClient();

  const resposne = await apolloClient.query({
    query: GetProductDetailsDocument,
    variables: slug,
  });

  return resposne;
};

export const getSingleProductBySlug = async (slug: string) => {
  const res = await fetcher<SingleProductDetailType>({
    query: singleProductDetailQuery,
    variables: { slug },
    next: {
      revalidate: 15,
    },
  });

  return res.body;
};

export const getMe = async () => {
  const res = await fetcher<{
    data: {
      me: CurrentUser | null;
    };
  }>({
    query: meQuery,
    cache: "no-cache",
  });

  return res.body.data;
};

/**
 *
 * Example mutation
 *
 * @returns - Success message
 */
export const logOut = async () => {
  const res = await fetcher<{
    data: {
      logout: Success;
    };
  }>({
    query: logOutMutation,
    cache: "no-cache",
  });

  return res.body.data;
};

export const getCurrentUser = async () => {
  const response = await getClient().query({ query: GetCurrentUserDocument });
  const { data } = response;

  return data;
};

export const addItemToOrder = async (
  variantId: number | string,
  quantity: number,
  customFields: OrderLineCustomFieldsInput
) => {
  const response = await getClient().mutate({
    mutation: AddItemToOrderDocument,
    variables: { variantId, quantity, customFields },
  });
  return response;
};

export const addSubscriptionToOrder = async (
  subscriptionPackageId: number | string
) => {
  const response = await getClient().mutate({
    mutation: AddSubscriptionToOrderDocument,
    variables: { subscriptionPackageId },
  });
  return response.data;
};
export const verifyCustomerAccount = async (token: String) => {
  console.log({ token });
  const response = await getClient().mutate({
    mutation: VerifyCustomerAccountDocument,
    variables: { token },
  });
  const data: VerifyCustomerAccountMutation = response.data;
  return data;
};

// () = > {

//   startTransition(async () => {
//     const res = await addItemToOrder(productVariantId, quantity);

//     if (res.addItemToOrder.__typename === "Order") {
//       router.refresh();
//     }

//     throw new Error(res.addItemToOrder.message);
//   })
// }

/**
 * Get the items in the cart.
 * The user must be logged in for this operation
 */

export const getActiveOrders = async () => {
  const response = await getClient().query({ query: ActiveOrdersDocument });

  const { data } = response;

  return data;
};

/**
 * Get eligible  payment methods
 * The user must be logged in for this operation
 */

export const getEligiblePaymentMethods = async () => {
  const response = await getClient().query({
    query: EligiblePaymentMethodsDocument,
  });
  const { data }: { data: EligiblePaymentMethodsQuery } = response;
  return data;
};

/**
 * Remove items from the cart
 */
export const removeItemFromCart = async (orderLineId: String) => {
  const response = await getClient().mutate({
    mutation: RemoveItemFromCartDocument,
    variables: { orderLineId },
  });
  const { data } = response;

  return data.removeOrderLine;
};

/**
 * Get list of available countries for shipping along with their country code.
 * We will only use country code while create shipping address.
 */

export const getAvailableCountries = async () => {
  const response = await getClient().query({
    query: AvailableCountriesDocument,
  });
  const { data } = response;

  return data;
};

/**
 * Set Order Shipping Address
 */

export const createOrderShippingAddress = async (
  input: SetOrderShippingAddressMutationVariables
) => {
  const response = await getClient().mutate({
    mutation: SetOrderShippingAddressDocument,
    variables: input,
  });

  const { data } = response;

  return data;
};

/**
 * Set shipping method
 */

export const setOrderShippingMethod = async (
  shippingMethodId: SetOrderShippingMethodMutationVariables
) => {
  const response = await getClient().mutate({
    mutation: SetOrderShippingMethodDocument,
    variables: shippingMethodId,
  });
  const { data } = response;

  return data;
};

/**
 * Transition order state
 */
export const transitionOrderState = async (
  state: TransitionOrderToStateMutationVariables
) => {
  const response = await getClient().mutate({
    mutation: TransitionOrderToStateDocument,
    variables: state,
  });
  const { data } = response;

  return data;
};

/**
 * Add payment to order mutation.
 */

export const addPaymentToOrder = async (
  input: AddPaymentToOrderMutationVariables
) => {
  const response = await getClient().mutate({
    mutation: AddPaymentToOrderDocument,
    variables: input,
  });
  const { data } = response;

  return data;
};

/**
 *
 * @returns list of downloadable assets of current user
 */

export const getDownloadableAssets = async () => {
  const response = await getClient().query({
    query: GetDownloadableAssetsDocument,
  });

  const data: GetDownloadableAssetsQuery = response.data;

  return data;
};

/**
 * Get list of orders history
 */

export const getOrderHistory = async () => {
  const response = await getClient().query({ query: GetOrderHistoryDocument });
  const { data } = response;

  return data;
};

/**
 * Return favourites
 */

export const getFavourites = async () => {
  const response = await getClient().query({ query: GetFavouritesDocument });
  const data: GetFavouritesQuery = response.data;
  return data;
};

/**
 * Add product to favourite
 */

export const addFavourite = async (id: String) => {
  const getFavouritesResponse = await getFavourites();
  const previousIds =
    getFavouritesResponse.activeCustomer?.customFields?.favorites?.map(
      (item) => item.id
    ) || [];
  const payload = [...previousIds, id];

  const response = await getClient().mutate({
    mutation: AddFavouriteDocument,
    variables: { favouriteIds: payload },
  });

  const data: AddFavouriteMutation = response.data;
  return data;
};

type RegisterCustomerAccountVariables = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const registerCustomerAccount = async (
  params: RegisterCustomerAccountVariables
) => {
  const res = await fetcher<{
    data: {
      registerCustomerAccount:
        | {
            __typename: "Success";
            success: boolean;
          }
        | {
            __typename:
              | "MissingPasswordError"
              | "PasswordValidationError"
              | "NativeAuthStrategyError";
            errorCode: string;
            message: string;
          };
    };
    variables: {
      input: RegisterCustomerAccountVariables;
    };
  }>({
    query: registerCustomerAccountMutation,
    variables: {
      input: params,
    },
    cache: "no-cache",
  });

  return res.body.data;
};
