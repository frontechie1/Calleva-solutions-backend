import { useSelector } from "react-redux";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import NavBarComponent from "./components/layout/NavBar";
import SidebarComponent from "./components/layout/SideBar";
import ChangeUsername from "./pages/configuration/ChangeUsername";
import DashBoard from "./pages/dashboard/DashBoard";

import SideBarTwo from "./components/layout/SideBarTwo";
import Login from "./pages/auth/Login";
import ChangeEmail from "./pages/configuration/ChangeEmail";
import ChangePassword from "./pages/configuration/ChangePassword";
import HomePageContent from "./pages/configuration/HomePageContent";
import SiteSettings from "./pages/configuration/SiteSettings";
import ManageAddCustomer from "./pages/customers/ManageAddCustomer";
import ManageCustomerList from "./pages/customers/ManageCustomerList";
import UpdateCustomerProfile from "./pages/customers/UpdateCustomerProfile";
import ManagePayments from "./pages/payment/ManagePayments";
import ManageServiceCategory from "./pages/service/ManageServiceCategory";
import ManageServicePackages from "./pages/service/ManageServicePackages";
import ManageServiceRequest from "./pages/service/ManageServiceRequest";
import ManageAddServiceProvider from "./pages/serviceProviders/ManageAddServiceProvider";
import ManageServiceProviderList from "./pages/serviceProviders/ManageServiceProviderList";
import UpdateServiceProvider from "./pages/serviceProviders/UpdateServiceProvider";
import routes from "./presentation/routes_icons/routes";
import { getLoggedInState, userRolesObj } from "./service/features/authSlice";
import ManageMemberShipPlan from "./pages/membership/ManageMemberShipPlan";
import ManageCountry from "./pages/country/ManageCountry";

function App() {
  const isLoggedIn = useSelector(getLoggedInState);
  return (
    <Router>
      <div className="overflow-auto min-h-full  max-w-[100vw] ">
        <div className="flex flex-row w-full h-full">
          {isLoggedIn && <SidebarComponent />}
          <div className="flex-1 flex flex-col bg-gray-300">
            {isLoggedIn && <NavBarComponent />}
            <div className="flex w-full relative">
              <Routes>
                <Route
                  exact
                  path="/admin/login"
                  element={<Login userRole={userRolesObj.superAdmin} />}
                />
                <Route
                  exact
                  path="/admins/admin/login"
                  element={<Login userRole={userRolesObj.admin} />}
                />
                <Route
                  exact
                  path="/"
                  element={<Navigate to="/admin/dashboard" />}
                />
                <Route
                  exact
                  path="/admin/dashboard"
                  element={<DashBoard title={"Dashboard"} />}
                />
                <Route
                  exact
                  path={
                    routes["Configuration"]["links"]["Change-username"]["url"]
                  }
                  element={
                    <ChangeUsername
                      title={
                        routes["Configuration"]["links"]["Change-username"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Configuration"]["links"]["Change-password"]["url"]
                  }
                  element={
                    <ChangePassword
                      title={
                        routes["Configuration"]["links"]["Change-password"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={routes["Configuration"]["links"]["Change-email"]["url"]}
                  element={
                    <ChangeEmail
                      title={
                        routes["Configuration"]["links"]["Change-email"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Configuration"]["links"]["Site-settings"]["url"]
                  }
                  element={
                    <SiteSettings
                      title={
                        routes["Configuration"]["links"]["Site-settings"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Configuration"]["links"]["Homepage-content"]["url"]
                  }
                  element={
                    <HomePageContent
                      title={
                        routes["Configuration"]["links"]["Homepage-content"][
                          "title"
                        ]
                      }
                    />
                  }
                />

                <Route
                  exact
                  path={
                    routes["Manage-Service-Request"]["links"][
                      "Service Request List"
                    ]["url"]
                  }
                  element={
                    <ManageServiceRequest
                      title={routes["Manage-Service-Request"]["title"]}
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Service-Categories"]["links"][
                      "Service Category List"
                    ]["url"]
                  }
                  element={
                    <ManageServiceCategory
                      title={routes["Service-Categories"]["title"]}
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Manage-Service-Packages"]["links"][
                      "Service-Package-List"
                    ]["url"]
                  }
                  element={
                    <ManageServicePackages
                      title={routes["Manage-Service-Packages"]["title"]}
                    />
                  }
                />

                <Route
                  exact
                  path={
                    routes["Manage-Customers"]["links"]["Customer-list"]["url"]
                  }
                  element={
                    <ManageCustomerList
                      title={routes["Manage-Customers"]["title"]}
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Manage-Customers"]["links"]["create-customer"][
                      "url"
                    ]
                  }
                  element={
                    <ManageAddCustomer
                      title={
                        routes["Manage-Customers"]["links"]["create-customer"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={`${routes["Manage-Customers"]["links"]["update-customer"]["url"]}/:id`}
                  element={
                    <UpdateCustomerProfile
                      title={
                        routes["Manage-Customers"]["links"]["update-customer"][
                          "title"
                        ]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Manage-service-providers"]["links"][
                      "Service-Provider-List"
                    ]["url"]
                  }
                  element={
                    <ManageServiceProviderList
                      title={routes["Manage-service-providers"]["title"]}
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Manage-service-providers"]["links"][
                      "Create-Service-Provider"
                    ]["url"]
                  }
                  element={
                    <ManageAddServiceProvider
                      title={
                        routes["Manage-service-providers"]["links"][
                          "Create-Service-Provider"
                        ]["title"]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={`${routes["Manage-service-providers"]["links"]["Update-Service-Provider"]["url"]}/:id`}
                  element={
                    <UpdateServiceProvider
                      title={
                        routes["Manage-service-providers"]["links"][
                          "Update-Service-Provider"
                        ]["title"]
                      }
                    />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Manage-Payment"]["links"]["Payment-History"]["url"]
                  }
                  element={
                    <ManagePayments title={routes["Manage-Payment"]["title"]} />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Membership-Plan"]["links"]["Membership-plan-list"]["url"]
                  }
                  element={
                    <ManageMemberShipPlan title={routes["Membership-Plan"]["title"]} />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Membership-Plan"]["links"]["Membership-plan-list"]["url"]
                  }
                  element={
                    <ManageCountry title={routes["Membership-Plan"]["title"]} />
                  }
                />
                <Route
                  exact
                  path={
                    routes["Manage-Countries"]["links"]["Country List"]["url"]
                  }
                  element={
                    <ManageCountry title={routes["Manage-Countries"]["title"]} />
                  }
                />
              </Routes>
              <SideBarTwo />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
