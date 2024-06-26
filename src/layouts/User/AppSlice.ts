import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface appStoreProps {
  name: string;
  isSummit: boolean;
  loadingSummit: boolean;
  lang: string;
  isLogged: boolean;
  isForgot: boolean;
}

const initialState: appStoreProps = {
  name: "",
  isSummit: false,
  loadingSummit: false,
  lang: "English",
  isLogged: false,
  isForgot: false,
};

const AppSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    setForgotTrue(state) {
      state.isForgot = true;
    },
    setForgotFalse(state) {
      state.isForgot = false;
    },
    setLoadingSummitTrue(state) {
      state.loadingSummit = true;
    },
    setLoadingSummitFalse(state) {
      state.loadingSummit = false;
    },
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
      toast.success("Logout successful");
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
  setLoadingSummitFalse,
  setLoadingSummitTrue,
  setForgotFalse,
  setForgotTrue,
} = AppSlice.actions;

export default AppSlice.reducer;
