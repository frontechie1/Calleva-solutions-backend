import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../load/loadData";
import { statusObj } from "./customer/customerSlice";

export const userRolesObj = Object.freeze({
  admin: "admin",
  superAdmin: "superAdmin",
});

const name = "auth";
const initialState = {
  status: statusObj.idle,
  errorMessage: "",
  isLoggedIn: false,
  userRole: userRolesObj.superAdmin,
};

export const validateUser = createAsyncThunk(
  "/auth/validateUser",
  ({ email, password, userRole }) => {
    return login({ email, password });
  }
);

export const logoutUser = createAsyncThunk("/auth/logoutUser", async () => {});

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(validateUser.pending, (state) => {
        state.status = statusObj.pending;
        console.log("pending")
      })
      .addCase(validateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const payload = action.payload;
        if (payload.error)
        {
          state.status = statusObj.error;
          state.isLoggedIn = false;
          state.errorMessage = "incorrect email or password"
        } else {
          state.status = statusObj.fulfilled;
          state.isLoggedIn = true;
        }
      })
      .addCase(validateUser.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = statusObj.pending;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = statusObj.fulfilled;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.errorMessage == "Sorry could not load data";
        state.status = statusObj.error;
      });
  },
});

export const { setUserRole } = authSlice.actions;
export const getLoggedInState = (state) => state.auth.isLoggedIn;
export const getLoggedInStatus = (state) => state.auth.status;
export const getUserRole = (state) => state.auth.userRole;
// export const {} = customerSlice.actions;
export default authSlice.reducer;
