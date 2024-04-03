import routes from "../routes_icons/routes";
import store from "../../service/store";

export default {
  customer: {
    title: "Customers",
    link: routes["Manage-Customers"]["links"]["Customer-list"]["url"],
    icon: routes["Manage-Customers"]["icon"],
    status: () => store.subscribe(()=>{}),
    colors: {
      link: "bg-orange-900",
      icon: "text-orange-900",
      bg: "bg-primary",
    },
  },
  serviceProvider: {
    title: "Service Providers",
    link: routes["Manage-service-providers"]["links"]["Service-Provider-List"][
      "url"
    ],
    icon: routes["Manage-service-providers"]["icon"],
    colors: {
      link: "bg-green-900",
      icon: "text-green-900",
      bg: "bg-green-700",
    },
  },
  payment: {
    title: "Payments",
    link: routes["Manage-Payment"]["links"]["Payment-History"]["url"],
    icon: routes["Manage-Payment"]["icon"],
    colors: {
      link: "bg-red-900",
      icon: "text-red-900",
      bg: "bg-red-700",
    },
  },
  serviceOrder: {
    title: "Service Order",
    link: routes["Manage-Service-Request"]["links"]["Service Request List"][
      "url"
    ],
    icon: routes["Manage-Service-Request"]["icon"],
    colors: {
      link: "bg-blue-900",
      icon: "text-blue-900",
      bg: "bg-blue-700",
    },
  },
  category: {
    title: "Categories",
    link: routes["Service-Categories"]["links"]["Service Category List"]["url"],
    icon: routes["Service-Categories"]["icon"],
    colors: {
      link: "bg-orange-900",
      icon: "text-orange-900",
      bg: "bg-primary",
    },
  },
  servicePackage: {
    title: "Service Packages",
    link: routes["Manage-Service-Packages"]["links"]["Service-Package-List"][
      "url"
    ],
    icon: routes["Manage-Service-Packages"]["icon"],
    colors: {
      link: "bg-green-900",
      icon: "text-green-900",
      bg: "bg-green-700",
    },
  },
  // {
  //   title: "Addons",
  //   link: "/addons",
  //   icon: routes["Manage-Adds-ons"]["icon"],
  //   colors: {
  //     link: "bg-red-900",
  //     icon: "text-red-900",
  //     bg: "bg-red-700",
  //   },
  // },
  // {
  //   title: "Countries",
  //   link: "/countries",
  //   icon: routes["Manage-Countries"]["icon"],
  //   colors: {
  //     link: "bg-blue-900",
  //     icon: "text-blue-900",
  //     bg: "bg-blue-700",
  //   },
  // },
};
