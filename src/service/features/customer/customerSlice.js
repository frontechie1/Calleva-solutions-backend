import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../../load/loadData";

export const statusObj = Object.freeze({
  idle: "idle",
  pending: "pending",
  fulfilled: "fulfilled",
  error: "error",
});

const name = "customer";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
  customers: [],
  superChecked: false,
  selectedCustomers: {},
};

export const readAllCustomers = createAsyncThunk(
  `${name}/readAllCustomers`,
  async () => {
    const response = await readAll("/customerprofile");
    return response;
  }
);

const customerSlice = createSlice({
  name,
  initialState,
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.customers = state.customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(action.payload) ||
          customer.email.toLowerCase().includes(action.payload)
      );
    },
    resetCustomerStatus: (state) => {
      state.status = statusObj.idle;
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomers = {
        ...state.selectedCustomers,
        [action.payload.id]: action.payload.isChecked,
      };
    },
    checkAllCustomers: (state) => {
      const selectedCustomers = state.selectedCustomers;
      for (const key in selectedCustomers) {
        if (Object.hasOwnProperty.call(selectedCustomers, key)) {
          selectedCustomers[key] = true;
        }
      }
      state.selectedCustomers = selectedCustomers;
    },
    uncheckAllCustomers: (state) => {
      const selectedCustomers = state.selectedCustomers;
      for (const key in selectedCustomers) {
        if (Object.hasOwnProperty.call(selectedCustomers, key)) {
          selectedCustomers[key] = false;
        }
      }
      state.selectedCustomers = selectedCustomers;
    },
    setSuperCheck: (state, action) => {
      state.superChecked = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(readAllCustomers.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllCustomers.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.customers = action.payload.data;
          state.status = statusObj.fulfilled;
          state.errorMessage = action.payload.message
        }
      })
      .addCase(readAllCustomers.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const { searchUser, resetCustomerStatus,checkAllCustomers,uncheckAllCustomers,setSuperCheck,setSelectedCustomer } = customerSlice.actions;
export const getSuperCheckedState = (state) =>
  state.customer.superChecked;
export const getSelectedCustomers = (id) => (state) =>
  state.customer.selectedCustomers[id];
export const getAllCustomers = (state) => state.customer.customers;
export const selectCustomerById = (id) => (state) =>
  state.customer.customers.filter((customer) => customer._id === id);
export default customerSlice.reducer;
