import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createData } from "../../load/loadData";
import { statusObj } from "../customer/customerSlice";

const name = "createServiceProvider";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
};

export const createServiceProvider = createAsyncThunk(
  `${name}/createServiceProvider`,
  async (data) => {
    const response = await createData(data, "/customerprofile");
    return response;
  }
);

const createServiceProviderSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetCreateServiceProviderState: (state) => {
      state.status = statusObj.idle;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(createServiceProvider.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(createServiceProvider.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = statusObj.error;
          state.errorMessage = action.payload.message;
        } else {
          state.status = statusObj.fulfilled;
          state.errorMessage = action.payload.message;
        }
      })
      .addCase(createServiceProvider.rejected, (state,action) => {
        state.status = statusObj.error;
        state.errorMessage = action.payload.message;
      });
  },
});
export const { resetCreateServiceProviderState } =
  createServiceProviderSlice.actions;
export const getCreateServiceProviderState = (sate) =>
  sate.createServiceProvider.status;
export const getCreateServiceProviderMessage = (state) =>
  state.createServiceProvider.errorMessage;

export default createServiceProviderSlice.reducer;
