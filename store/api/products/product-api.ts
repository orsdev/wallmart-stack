import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsType = {
  products: Array<ProductType>;
  limit: number;
  skip: number;
  total: number;
};

type RootState = any; // normally inferred from state

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string;
  payload: RootState;
  err: unknown;
} {
  return action.type === REHYDRATE;
}

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_ENDPOINT }),
  // to prevent circular type issues, the return type needs to be annotated as any
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      // when persisting the api reducer
      if (action.key === "key used with redux-persist") {
        return action.payload;
      }

      // When persisting the root reducer
      return action.payload[ProductsApi.reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsType, string>({
      query: (search_value: string) => {
        return `/products/search?q=${search_value}`;
      },
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getSingleProduct: builder.query<ProductType, string>({
      query: (id) => {
        return `/product/${id}`;
      },
    }),
  }),
});

export const {
  useLazyGetAllProductsQuery,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = ProductsApi;
