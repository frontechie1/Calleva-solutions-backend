import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";
import { statusObj } from "./customer/customerSlice";

export const filters = Object.freeze({
  customers: "Customers",
  suppliers: "Service Providers",
});

const name = "serviceProviderAndCustomerSlice";
const initialState = {
  filter: filters.customers,
  selectedEmail: "",
  status: statusObj.idle,
  data: [],
};

export const readAllData = createAsyncThunk(
  `${name}/getAllServiceProviderOrCustomerSlice`,
  async (args, { getState }) => {
    const state = getState();
    const filter = state.serviceProviderAndCustomer.filter;
    let response;
    if (filter == "Customers") {
      response = await readAll("/customerprofile");
    } else if (filter == "Suppliers") {
      response = await readAll("/serviceprofile");
    }
    return response.data;
  }
);

const serviceProviderAndCustomerSlice = createSlice({
  name,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.status = statusObj.pending;
    },
    setEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    resetStatus: (state) => {
      state.status = statusObj.pending;
    },
    removerEmail: (state) => {
      state.selectedEmail = "";
    },
  },
  extraReducers: (build) => {
    build
      .addCase(readAllData.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllData.fulfilled, (state, action) => {
        state.status = statusObj.fulfilled;
        state.data = action.payload;
      })
      .addCase(readAllData.rejected, (state) => {
        state.status = statusObj.error;
      });
  },
});

export const getAllData = (state) => state.serviceProviderAndCustomer.data;
export const getSelectedEmail = (state) =>
  state.serviceProviderAndCustomer.selectedEmail;
export const getFilterValue = (state) =>
  state.serviceProviderAndCustomer.filter;

export const { setFilter, resetStatus, setEmail, removerEmail } =
  serviceProviderAndCustomerSlice.actions;
export default serviceProviderAndCustomerSlice.reducer;
