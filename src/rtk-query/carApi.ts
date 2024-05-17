import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dataPopularProductsProps } from "../data/interfaceDataCar";

interface dataCarApi {
  result: number;
  status: string;
  data: dataPopularProductsProps[];
}

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yidielectro-api-be.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getCarByType: builder.query<dataCarApi, string>({
      query: (type) => `cars/${type}`,
    }),
    getFullCar: builder.query<dataCarApi, string>({
      query: () => "cars",
    }),
  }),
});

export const { useGetCarByTypeQuery, useGetFullCarQuery } = carApi;
