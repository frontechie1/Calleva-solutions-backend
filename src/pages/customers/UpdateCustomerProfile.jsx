import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import {
  errorAlertObj,
  successAlertObj,
} from "../../presentation/routes_icons/alertModel";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCustomerById,
  statusObj,
} from "../../service/features/customer/customerSlice";
import {
  getUpdateCustomerMessage,
  getUpdateCustomerStatus,
  resetCustomerUpdateStatus,
  updateCustomerById,
} from "../../service/features/customer/updateCustomerSlice";
import {
  openAlert,
  setAlertData,
} from "../../service/features/navigation_slice";

// eslint-disable-next-line react/prop-types
function UpdateCustomerProfile({ title }) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const message = useSelector(getUpdateCustomerMessage);
  const customer = useSelector(selectCustomerById(id))[0];
  const status = useSelector(getUpdateCustomerStatus);
  let dispatchPromise;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    dispatchPromise = dispatch(updateCustomerById({ id, data }));
  };

  const handleCancel = () => {
    if (dispatchPromise) dispatchPromise.abort();
  };

  useEffect(() => {
    if (status == statusObj.fulfilled) {
      dispatch(setAlertData({ ...successAlertObj, message: message }));
      dispatch(openAlert());
      dispatch(resetCustomerUpdateStatus());
    }

    if (status == statusObj.error) {
      dispatch(setAlertData({ ...errorAlertObj, message: message }));
      dispatch(openAlert());
      dispatch(resetCustomerUpdateStatus());
    }
  }, [dispatch, message, status]);

  return (
    <PageLayout header={title} id="customer">
      <Container>
        <form onSubmit={handleSubmit} method="Post">
          <FormTextInput
            label="Name"
            name="name"
            value={customer && customer.name}
          />
          <FormTextInput
            label="Email"
            name="email"
            value={customer && customer.email}
            type="email"
          />
          <FormTextInput
            label="Contact Number"
            name="contact"
            value={customer && customer.contact}
          />
          <FormTextInput
            label="Address"
            name="address"
            value={customer && customer.address}
          />
          <FormImageInput
            label="Profile picture"
            name="profilePicture"
            helperText="Supported File Types: jpg, jpeg, png (Max. 2MB)."
            file={customer && customer.profilePicture}
          />

          <FormActionButtons handleCancel={handleCancel} status={status} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default UpdateCustomerProfile;
