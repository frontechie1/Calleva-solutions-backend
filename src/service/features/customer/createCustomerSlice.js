import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createData } from "../../load/loadData";
import { statusObj } from "./customerSlice";

const name = "customer";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
};

export const createCustomer = createAsyncThunk(
  `${name}/createCustomer`,
  async (data) => {
    const response = await createData(data, "/customerprofile");
    return response;
  }
);

const createCustomerSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetCreateCustomerStatus: (state) => {
      state.status = statusObj.idle;
    },
  },
  extraReducers(builder) {
    builder

      .addCase(createCustomer.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.status = statusObj.fulfilled;
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(createCustomer.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const { resetCreateCustomerStatus } = createCustomerSlice.actions;
export const getCreateCustomerStatus = (state) => state.createCustomer.status;
export const getCreateCustomerMessage = (state) =>
  state.createCustomer.errorMessage;

export default createCustomerSlice.reducer;
