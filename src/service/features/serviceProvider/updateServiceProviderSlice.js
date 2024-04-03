import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateById } from "../../load/loadData";
import { statusObj } from "../customer/customerSlice";

const name = "updateServiceProvider";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
};

export const updateServiceProviderById = createAsyncThunk(
  `${name}/updateServiceProviderById`,
  async ({ id, data }) => {
    const response = await updateById({ id, data }, "/customerprofile");
    return response;
  }
);

const updateServiceProviderSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetUpdateServiceProviderState: (state) => {
      state.status = statusObj.idle;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(updateServiceProviderById.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(updateServiceProviderById.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.status = statusObj.fulfilled;
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(updateServiceProviderById.rejected, (state) => {
        state.status = statusObj.error;
      });
  },
});
export const { resetUpdateServiceProviderState } =
  updateServiceProviderSlice.actions;
export const getUpdateServiceProviderState = (state) =>
  state.updateServiceProvider.status;
export const getUpdateServiceProviderMessage = (state) =>
  state.updateServiceProvider.errorMessage;

export default updateServiceProviderSlice.reducer;
