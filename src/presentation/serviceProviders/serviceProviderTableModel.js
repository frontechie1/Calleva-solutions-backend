import { deleteIcon, edit, visible } from "../routes_icons/iconsHolder";
import routes from "../routes_icons/routes";

export const serviceProviderTableHeaders = [
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
    label: "First Name",
  },
  {
    id: "email",
    Icon: "",
    action: () => {},
    label: "Email",
  },
  {
    id: "contact",
    Icon: "",
    action: () => {},
    label: "Contact",
  },
  {
    id: "address",
    Icon: "",
    action: () => {},
    label: "Address",
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
    label: "Action",
  },
  {
    id: "Availability",
    Icon: "",
    action: () => {},
    label: "Availability",
  },
  {
    id: "Package",
    Icon: "",
    action: () => {},
    label: "Package",
  },
];

export const serviceProviderTableAction = [
  {
    icons: [
      {
        ...edit,
        link: routes["Manage-service-providers"]["links"][
          "Update-Service-Provider"
        ]["url"],
      },
    ],
  },
  {
    icons: [visible],
  },
  {
    icons: [deleteIcon],
  },
];
