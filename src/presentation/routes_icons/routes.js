import { userRolesObj } from "../../service/features/authSlice";
import { tableIcons } from "./iconsHolder";

export const loginRoutes = {
  [userRolesObj.admin]: "/admin/admins/login",
  [userRolesObj.superAdmin]: "/admin/login",
};

export default {
  Configuration: {
    id: 1,
    title: "Configuration",
    icon: tableIcons.setting,
    links: {
      "Change-username": {
        title: "Change username",
        url: "/admin/configuration/change-username",
        ignore: false,
      },
      "Change-password": {
        title: "Change Password",
        url: "/admin/configuration/change-password",
        ignore: false,
      },
      "Change-email": {
        title: "Change email",
        url: "admin/configuration/email",
        ignore: false,
      },
      "Site-settings": {
        title: "Site settings",
        url: "/admin/configuration/settings",
      },
      "Homepage-content": {
        title: "Homepage content",
        url: "/admin/configuration/homepage-configuration",
        ignore: false,
      },
    },
  },
  "Manage-Customers": {
    id: 2,
    title: "Manage Customers",
    icon: tableIcons.people,
    links: {
      "Customer-list": {
        title: "Customer list",
        url: "/admin/customers",
        ignore: false,
      },
      "create-customer": {
        title: "Add Customer",
        url: "/admin/customers/create-customer",
        ignore: true,
      },
      "update-customer": {
        title: "Update CUstomer info",
        url: "/admin/customers/update-customer",
        ignore: true,
      },
    },
  },
  "Manage-service-providers": {
    id: 4,
    title: "Manage service providers",
    icon: tableIcons.people,
    links: {
      "Service-Provider-List": {
        title: "Service Provider List",
        url: "/admin/service-providers",
        ignore: false,
      },
      "Create-Service-Provider": {
        title: "Add Service Provider",
        url: "/admin/service-providers/create-service-provider",
        ignore: true,
      },
      "Update-Service-Provider": {
        title: "Update Service Provider",
        url: "/admin/service-providers/update-service-provider",
        ignore: true,
      },
    },
  },
  "Manage-Payment": {
    id: 5,
    title: "Manage Payment",
    icon: tableIcons.money,

    links: {
      // "Withdrawal-Request": {
      //   title: "Withdrawal Request",
      //   url: "/admin/payments/withdrawal",
      // },
      "Payment-History": {
        title: "Payment History",
        url: "/admin/payments/history",
        ignore: false,
      },
    },
  },
  "Membership-Plan": {
    id: 6,
    title: "Membership Plan",
    icon: tableIcons.dollar,
    links: {
      "Membership-plan-list": {
        title: "Membership plan list ",
        url: "/admin/membership-plan-list",
      },
    },
  },
  "Manage-Service-Request": {
    id: 7,
    title: "Manage Service Request",
    icon: tableIcons.network,
    links: {
      "Service Request List": {
        title: "Service Request List",
        url: "/admin/service-request-list",
        ignore: false,
      },
    },
  },
  "Service-Categories": {
    id: 8,
    title: "Manage Service Categories",
    icon: tableIcons.category,
    links: {
      "Service Category List": {
        title: "Service Category List",
        url: "/admin/service-category-list",
        ignore: false,
      },
    },
  },
  "Manage-Service-Packages": {
    id: 9,
    title: "Manage Service Packages",
    icon: tableIcons.package,
    links: {
      "Service-Package-List": {
        title: "Service Package List",
        url: "/admin/services/service-package-list",
        ignore: false,
      },
    },
  },
  // "Manage-Adds-ons": {
  //   id: 10,
  //   title: "Manage Adds-ons  ",
  //   icon: MdCircle,
  //   links: {
  //     "Adds-ons List": {
  //       title: "Adds-ons List ",
  //       url: "/admin/adds-ons",
  //     },
  //   },
  // },
  "Manage-Countries": {
    id: 11,
    title: "Manage Countries  ",
    icon: tableIcons.world,
    links: {
      "Country List": {
        title: "Country List",
        url: "/admin/countries",
      },
    },
  },
  // "Manage-Pages": {
  //   id: 12,
  //   title: "Manage Pages",
  //   icon: FaFileAlt,
  //   links: {
  //     "Pages List": {
  //       title: "Pages List",
  //       url: "/admin/page-list",
  //     },
  //   },
  // },
};
