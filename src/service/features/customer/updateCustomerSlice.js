import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { updateById } from "../../load/loadData";
import { statusObj } from "./customerSlice";

const name = "customer";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
};

export const updateCustomerById = createAsyncThunk(
  `${name}/updateCustomerById`,
  async ({ id, data }, { signal }) => {
    console.log(data);
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await updateById(
      { id, data },
      "/customerprofile",
      source.token
    );
    return response;
  }
);

const updateCustomerSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetCustomerUpdateStatus: (state) => {
      state.status = statusObj.idle;
    },
  },
  extraReducers(builder) {
    builder

      .addCase(updateCustomerById.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(updateCustomerById.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.status = statusObj.fulfilled;
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(updateCustomerById.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const { resetCustomerUpdateStatus } = updateCustomerSlice.actions;
export const getUpdateCustomerStatus = (state=>state.updateCustomer.status)
export const getUpdateCustomerMessage = (state) => state.updateCustomer.errorMessage;

export default updateCustomerSlice.reducer;
