import { createSlice } from "@reduxjs/toolkit";

export interface appStoreProps {
  name: string;
  isSummit: boolean;
  lang: string;
  isLogged: boolean;
}

const initialState: appStoreProps = {
  name: "",
  isSummit: false,
  lang: "English",
  isLogged: false,
};

const AppSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    outSummit(state) {
      state.isSummit = false;
    },
    setIsSubmit(state) {
      state.isSummit = true;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setLang(state, action) {
      state.lang = action.payload;
    },
    setIsLoggedTrue(state) {
      state.isLogged = true;
      sessionStorage.setItem("isLogged", JSON.stringify(true));
    },
    setIsLoggedFalse(state) {
      state.isLogged = false;
      sessionStorage.setItem("isLogged", JSON.stringify(false));
    },
  },
});

export const {
  setIsSubmit,
  setName,
  outSummit,
  setLang,
  setIsLoggedFalse,
  setIsLoggedTrue,
} = AppSlice.actions;

export default AppSlice.reducer;
