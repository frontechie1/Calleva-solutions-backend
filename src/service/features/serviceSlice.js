import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";
import { statusObj } from "./customer/customerSlice";

const name = "service";
const initialState = {
  status: statusObj.idle,
  message: "",
  services: [],
};

export const readAllServices = createAsyncThunk(
  `${name}/readAllServices`,
  async () => {
    const response = await readAll("/services");
    return response.data;
  }
);

const servicesSlice = createSlice({
  name,
  initialState,
  reducers: {
    searchServices: (state, action) => {
      state.services = state.services.filter(
        (customer) =>
          customer.packageName.toLowerCase().includes(action.payload) ||
          customer.providerEmail.toLowerCase().includes(action.payload) ||
          customer.category.toLowerCase().includes(action.payload) ||
          customer.subCategory.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(readAllServices.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.status = statusObj.fulfilled;
      })
      .addCase(readAllServices.rejected, (state) => {
        state.message == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const { searchServices } = servicesSlice.actions;
export const getAllServices = (state) => state.service.services;
// export const {} = customerSlice.actions;
export default servicesSlice.reducer;
