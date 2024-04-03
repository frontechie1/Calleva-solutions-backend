import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import {
  errorAlertObj,
  successAlertObj,
} from "../../presentation/routes_icons/alertModel";
import routes from "../../presentation/routes_icons/routes";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCreateCustomerStatus } from "../../service/features/customer/createCustomerSlice";
import { statusObj } from "../../service/features/customer/customerSlice";
import {
  openAlert,
  setAlertData,
} from "../../service/features/navigation_slice";
import {
  createServiceProvider,
  getCreateServiceProviderMessage,
  getCreateServiceProviderState,
} from "../../service/features/serviceProvider/createServiceProviderSlice";

// eslint-disable-next-line react/prop-types
function ManageAddServiceProvider({ title }) {
  const dispatch = useDispatch();
  const status = useSelector(getCreateServiceProviderState);
  const message = useSelector(getCreateServiceProviderMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(createServiceProvider(data));
  };

  useEffect(() => {
    if (status == statusObj.fulfilled) {
      dispatch(setAlertData({ ...successAlertObj, message }));
      dispatch(openAlert());
      dispatch(resetCreateCustomerStatus());
    }

    if (status == statusObj.error) {
      dispatch(setAlertData({ ...errorAlertObj, message }));
      dispatch(openAlert());
      dispatch(resetCreateCustomerStatus());
    }
  }, [dispatch, message, status]);
  return (
    <PageLayout
      header={title}
      id="serviceProvider"
      other={
        routes["Manage-service-providers"]["links"]["Create-Service-Provider"]
      }
    >
      <Container>
        <form onSubmit={handleSubmit}>
          <FormTextInput label="Name" name="name" />
          <FormTextInput label="Email" name="email" type="email" />
          <FormTextInput label="Contact Number" name="contact" />
          <FormTextInput label="Address" name="address" />
          <FormImageInput
            label="Profile picture"
            name="profilePicture"
            helperText="Supported File Types: jpg, jpeg, png (Max. 2MB)."
          />
          <FormTextInput label="Country" name="country" />
          <FormActionButtons handleCancel={() => {}} status={status} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default ManageAddServiceProvider;
