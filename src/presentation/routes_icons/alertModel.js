import { alertTypeObj } from "../../service/features/navigation_slice";

export const successAlertObj = {
  alertType: alertTypeObj.success,
  message: "",
  bgColor: "bg-green-700",
  iconColor: "text-green-900",
};

export const errorAlertObj = {
  alertType: alertTypeObj.error,
  message: "",
  bgColor: "bg-red-700",
  iconColor: "text-red-900",
};
