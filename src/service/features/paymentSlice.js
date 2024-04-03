import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readAll } from "../load/loadData";
import { statusObj } from "./customer/customerSlice";

const name = "payment";
const initialState = {
  status: statusObj.idle,
  payments: [],
};

export const readAllPayments = createAsyncThunk(
  `${name}/readAllPayments`,
  async () => {
    const response = await readAll("/payments");
    return response.data;
  }
);

export const readServicePaymentsByEmail = createAsyncThunk(
  `${name}/readServicePaymentsByEmail`,
  async (email) => {
    const response = await readAll(`/payments/serviceprovider/${email}`);
    return response.data;
  }
);

export const readCustomerPaymentsByEmail = createAsyncThunk(
  `${name}/readCustomerPaymentsByEmail`,
  async (email) => {
    const response = await readAll(`/payments/customer/${email}`);
    return response.data;
  }
);

const paymentSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetPaymentStatus: (state) => {
      state.status = statusObj.idle;
    },
    searchPayment: (state, action) => {
      state.payments = state.payments.filter(
        (customer) =>
          customer.requestNumber.toLowerCase().includes(action.payload) ||
          customer.customerEmail.toLowerCase().includes(action.payload) ||
          customer.transactionID.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(readAllPayments.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readAllPayments.fulfilled, (state, action) => {
        state.payments = action.payload;

        state.status = statusObj.fulfilled;
      })
      .addCase(readCustomerPaymentsByEmail.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readCustomerPaymentsByEmail.fulfilled, (state, action) => {
        state.status = statusObj.fulfilled;
        state.payments = action.payload;
      })
      .addCase(readServicePaymentsByEmail.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(readServicePaymentsByEmail.fulfilled, (state, action) => {
        state.status = statusObj.fulfilled;
        state.payments = action.payload;
      });
  },
});

export const { resetPaymentStatus, searchPayment } = paymentSlice.actions;

export const getAllPayments = (state) => state.payment.payments;

export default paymentSlice.reducer;
