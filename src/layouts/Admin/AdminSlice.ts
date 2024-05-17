import { createSlice } from "@reduxjs/toolkit";

export interface adminStoreProps {
  isLoginAdmin: boolean;
}

const initialState: adminStoreProps = {
  isLoginAdmin: false,
};

const AdminSlice = createSlice({
  initialState,
  name: "admin",
  reducers: {
    login(state) {
      state.isLoginAdmin = true;
      sessionStorage.setItem("adminLogin", JSON.stringify(state.isLoginAdmin));
    },
    logout(state) {
      state.isLoginAdmin = false;
      sessionStorage.setItem("adminLogin", JSON.stringify(state.isLoginAdmin));
    },
  },
});

export const { login, logout } = AdminSlice.actions;

export default AdminSlice.reducer;
