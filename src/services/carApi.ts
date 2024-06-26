import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dataPopularProductsProps } from "../interface/interfaceDataCar";
import { dataClientReviewProps } from "../interface/interfaceDataClientReview";
import { URL_SERVER } from "../base/base";

interface dataCarApi {
  result: number;
  status: string;
  data: dataPopularProductsProps[];
}

interface dataUserApi {
  result: number;
  status: string;
  data: dataClientReviewProps[];
}

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL_SERVER}/api/v1`,
  }),
  endpoints: (builder) => ({
    getCarByType: builder.query<dataCarApi, string>({
      query: (type) => `cars/${type}`,
    }),
    getFullCar: builder.query<dataCarApi, string>({
      query: () => "cars",
    }),
    getFullUser: builder.query<dataUserApi, string>({
      query: () => "users",
    }),
  }),
});

export const { useGetCarByTypeQuery, useGetFullCarQuery, useGetFullUserQuery } =
  carApi;
