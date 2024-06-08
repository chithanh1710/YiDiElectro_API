import { createSlice } from "@reduxjs/toolkit";
import { dataPopularProductsProps } from "../interface/interfaceDataCar";

export interface productStoreProps {
  brand: string[];
  productType: string[];
  price: string[];
  sortBy: string;
}

const initialState: productStoreProps = {
  brand: [],
  productType: [],
  price: [],
  sortBy: "high",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addBrand(state, action) {
      state.brand.push(action.payload);
    },
    removeBrand(state, action) {
      state.brand = state.brand.filter((item) => item !== action.payload);
    },
    addProductType(state, action) {
      state.productType.push(action.payload);
    },
    removeProductType(state, action) {
      state.productType = state.productType.filter(
        (item) => item !== action.payload
      );
    },
    addPrice(state, action) {
      state.price.push(action.payload);
    },
    removePrice(state, action) {
      state.price = state.price.filter((item) => item !== action.payload);
    },
    updateSortBy(state, action) {
      state.sortBy = action.payload;
    },
    clearOption(state) {
      state.brand = [];
      state.price = [];
      state.productType = [];
      state.sortBy = "high";
    },
  },
});

export const {
  addBrand,
  removeBrand,
  addPrice,
  addProductType,
  removePrice,
  removeProductType,
  updateSortBy,
  clearOption,
} = productSlice.actions;

export default productSlice.reducer;

export const getDataPageProduct = (
  dataAll: dataPopularProductsProps[],
  optionProduct: productStoreProps
) => {
  const dataOption = dataAll.slice();
  return dataOption
    .sort((a, b) => {
      if (optionProduct.sortBy === "high") {
        return Number(b.price) - Number(a.price);
      } else {
        return Number(a.price) - Number(b.price);
      }
    })
    .filter((item) => {
      if (optionProduct.brand.length !== 0) {
        return optionProduct.brand.includes(item.brand);
      } else return true;
    })
    .filter((item) => {
      if (optionProduct.productType.length !== 0) {
        return optionProduct.productType.includes(item.productType);
      } else return true;
    })
    .filter((item) => {
      if (optionProduct.price.length !== 0) {
        return optionProduct.price.includes(item.priceRange);
      } else return true;
    });
};
