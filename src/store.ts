import { configureStore } from "@reduxjs/toolkit";
import homeReducer, { homeStoreProps } from "./pages/homeSlice";
import productReducer, { productStoreProps } from "./pages/productSlide";
import AppReducer, { appStoreProps } from "./layouts/User/AppSlice";
import AdminReducer, { adminStoreProps } from "./layouts/Admin/AdminSlice";
import { carApi } from "./rtk-query/carApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export interface storeProps {
  home: homeStoreProps;
  product: productStoreProps;
  app: appStoreProps;
  admin: adminStoreProps;
}

const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    home: homeReducer,
    product: productReducer,
    app: AppReducer,
    admin: AdminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});

setupListeners(store.dispatch);
export default store;
