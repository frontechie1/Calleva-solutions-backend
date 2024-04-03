import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import createCustomerSlice from "./features/customer/createCustomerSlice";
import customerSlice from "./features/customer/customerSlice";
import updateCustomerSlice from "./features/customer/updateCustomerSlice";
import navigationSlice from "./features/navigation_slice";
import paymentSlice from "./features/paymentSlice";
import createServiceProviderSlice from "./features/serviceProvider/createServiceProviderSlice";
import serviceProviderSlice from "./features/serviceProvider/serviceProviderSlice";
import updateServiceProviderSlice from "./features/serviceProvider/updateServiceProviderSlice";
import serviceProviderAndCustomerSlice from "./features/serviceProviderAndCustomerSlice";
import serviceRequestSlice from "./features/serviceRequestSlice";
import serviceSlice from "./features/serviceSlice";

const store = configureStore({
  reducer: {
    navigationController: navigationSlice,
    customer: customerSlice,
    updateCustomer: updateCustomerSlice,
    createCustomer: createCustomerSlice,
    serviceProvider: serviceProviderSlice,
    createServiceProvider: createServiceProviderSlice,
    updateServiceProvider: updateServiceProviderSlice,
    payment: paymentSlice,
    serviceProviderAndCustomer: serviceProviderAndCustomerSlice,
    service: serviceSlice,
    serviceRequest: serviceRequestSlice,
    auth: authSlice,
  },
});

export default store;
