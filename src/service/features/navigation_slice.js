import { createSlice } from "@reduxjs/toolkit";

export const dialogContentTye = Object.freeze({
  table: "table",
  profile: "Profile",
});
export const alertTypeObj = Object.freeze({
  success: "success",
  error: "error",
});

const name = "navigationSlice";
const initialState = {
  open: false,
  sideTwo: false,
  isAlertOpen: false,
  openDialog: false,
  dialogTitle: "",
  dialogContent: {
    data: {},
    type: dialogContentTye.table,
  },
  alertData: {
    alertType: alertTypeObj.success,
    message: "",
    bgColor: "",
    iconColor: "",
  },
};

const navigationSlice = createSlice({
  name,
  initialState,
  reducers: {
    setNavigationState: (state, action) => {
      state.open = action.payload;
      state.sideTwo = false;
    },
    toggleSideTwo: (state) => {
      state.sideTwo = !state.sideTwo;
      state.open = false;
    },
    setAlertData: (state, action) => {
      state.alertData = action.payload;
    },
    openAlert: (state) => {
      state.isAlertOpen = true;
    },
    closeAlert: (state) => {
      state.isAlertOpen = false;
    },
    setModalContent: (state, action) => {
      state.dialogContent = action.payload;
    },
    toggleDialog: (state) => {
      state.openDialog = !state.openDialog;
    },
    setDialogTitle: (state, action) => {
      state.dialogTitle = action.payload;
    },
  },
});

export const {
  setNavigationState,
  toggleSideTwo,
  openAlert,
  closeAlert,
  setAlertData,
  toggleDialog,
  setModalContent,
  setDialogTitle,
} = navigationSlice.actions;
export const selectNavState = (state) => state.navigationController.open;
export const selectSideTwo = (state) => state.navigationController.sideTwo;
export const getAlertData = (state) => state.navigationController.alertData;
export const getAlertStatus = (state) => state.navigationController.isAlertOpen;
export const getDialogContent = (state) =>
  state.navigationController.dialogContent;
export const getDialogState = (state) => state.navigationController.openDialog;
export const getDialogTitle = (state) => state.navigationController.dialogTitle;

export default navigationSlice.reducer;
