import { FaSort } from "react-icons/fa";
import { visible } from "../routes_icons/iconsHolder";

export const serviceRequestTableHeaders = [
  {
    id: "requestNumber",
    Icon: FaSort,
    action: () => {},
    label: "Request Number",
  },
  {
    id: "customerEmail",
    Icon: FaSort,
    action: () => {},
    label: "Customer Email",
  },
  {
    id: "category",
    Icon: "",
    action: () => {},
    label: "Category",
  },
  {
    id: "subcategory",
    Icon: FaSort,
    action: () => {},
    label: "Subcategory",
  },
  {
    id: "package",
    Icon: FaSort,
    action: () => {},
    label: "Time",
  },
  {
    id: "price",
    Icon: "",
    action: () => {},
    label: "Price",
  },
  {
    id: "serviceProviderEmail",
    Icon: FaSort,
    action: () => {},
    label: "Service Provider Email",
  },
  {
    id: "time",
    Icon: FaSort,
    action: () => {},
    label: "Date",
  },
  {
    id: "status",
    Icon: "",
    action: () => {},
    label: "Status",
  },
  {
    id: "payment",
    Icon: "",
    action: () => {},
    label: "Payment",
  },
  {
    id: "date",
    Icon: "",
    action: () => {},
    label: "Date",
  },
];

export const serviceRequestTableActions = [
  {
    icons: [visible],
  },
];
