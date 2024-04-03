import { FaSort } from "react-icons/fa";
import { visible } from "../routes_icons/iconsHolder";

export const managePaymentListHeaders = [
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
    id: "serviceProviderEmail",
    Icon: "",
    action: () => {},
    label: "Service Provider Email",
  },
  {
    id: "paymentsFor",
    Icon: FaSort,
    action: () => {},
    label: "Payments For",
  },
  {
    id: "transactionID",
    Icon: FaSort,
    action: () => {},
    label: "Transaction ID",
  },
  {
    id: "amount",
    Icon: "",
    action: () => {},
    label: "Amount",
  },
  {
    id: "type",
    Icon: FaSort,
    action: () => {},
    label: "Type",
  },
  {
    id: "statusDate",
    Icon: FaSort,
    action: () => {},
    label: "Status Date",
  },
  {
    id: "status",
    Icon: "",
    action: () => {},
    label: "status",
  },
];  

export const paymentActions = [
  {
    icons: [
      visible
    ]
  }
]



