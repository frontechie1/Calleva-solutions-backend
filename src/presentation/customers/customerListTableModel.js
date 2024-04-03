import {
  active,
  deleteIcon,
  disable,
  edit,
  visible,
} from "../routes_icons/iconsHolder";
import routes from "../routes_icons/routes";

export const customerListTableHeaders = [
  {
    id: "profilePicture",
    Icon: "",
    action: () => {},
    label: "",
  },
  {
    id: "name",
    Icon: "",
    action: () => {},
    label: "Name",
  },

  {
    id: "email",
    Icon: "",
    action: () => {},
    label: "Email",
  },
  {
    id: "address",
    Icon: "",
    action: () => {},
    label: "Address",
  },
  {
    id: "contact",
    Icon: "",
    action: () => {},
    label: "Contact",
  },
  {
    id: "country",
    Icon: "",
    action: () => {},
    label: "Country",
  },
  {
    id: "dateCreated",
    Icon: "",
    action: () => {},
    label: "Created At",
  },
  // {
  //   id: "actions",
  //   Icon: "",
  //   action: () => {},
  //   label: "Action",
  // },
];

export const customerListTableAction = [
  {
    icons: [disable, active],
  },
  {
    icons: [
      {
        ...edit,
        link: routes["Manage-Customers"]["links"]["update-customer"]["url"],
      },
    ],
  },
  {
    icons: [deleteIcon],
  },
  {
    icons: [visible],
  },
];
