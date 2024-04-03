import { FaSort } from "react-icons/fa";
import {
  active,
  deleteIcon,
  disable,
  edit,
  visible,
} from "../routes_icons/iconsHolder";

export const servicePackageTableHeaders = [
  {
    id: "serviceprofilepic",
    Icon: "",
    action: () => {},
    label: "Service profile",
  },
  {
    id: "providerEmail",
    Icon: FaSort,
    action: () => {},
    label: "Provider Email",
  },
  {
    id: "packageName",
    Icon: FaSort,
    action: () => {},
    label: "Package Name",
  },
  {
    id: "detail",
    Icon: "",
    action: () => {},
    label: "Detail",
  },
  {
    id: "category",
    Icon: FaSort,
    action: () => {},
    label: "Category",
  },
  {
    id: "subCategory",
    Icon: FaSort,
    action: () => {},
    label: "Subcategory",
  },
  {
    id: "time",
    Icon: "",
    action: () => {},
    label: "Time",
  },
  {
    id: "price",
    Icon: FaSort,
    action: () => {},
    label: "Price",
  },
  {
    id: "country",
    Icon: "",
    action: () => {},
    label: "Country",
  },
  {
    id: "city",
    Icon: "",
    action: () => {},
    label: "City",
  },
];

export const servicePackageTableAction = [
  {
    icons: [active, disable],
  },
  {
    icons: [edit],
  },
  {
    icons: [deleteIcon],
  },
  {
    icons: [visible],
  },
];
