import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormTextAreaInput from "../../components/form/FormTextAreaInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import
  {
    errorAlertObj,
    successAlertObj,
  } from "../../presentation/routes_icons/alertModel";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { statusObj } from "../../service/features/customer/customerSlice";
import
  {
    openAlert,
    setAlertData,
  } from "../../service/features/navigation_slice";
import { selectServiceProviderById } from "../../service/features/serviceProvider/serviceProviderSlice";
import
  {
    getUpdateServiceProviderMessage,
    getUpdateServiceProviderState,
    resetUpdateServiceProviderState,
    updateServiceProviderById,
  } from "../../service/features/serviceProvider/updateServiceProviderSlice";

// eslint-disable-next-line react/prop-types
function UpdateServiceProvider({ title }) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const customer = useSelector(selectServiceProviderById(id))[0];
  const message = useSelector(getUpdateServiceProviderMessage);
  const status = useSelector(getUpdateServiceProviderState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(updateServiceProviderById(id, data));
  };

  useEffect(() => {
    if (status == statusObj.fulfilled) {
      dispatch(setAlertData({ ...successAlertObj, message }));
      dispatch(openAlert());
      dispatch(resetUpdateServiceProviderState());
    }

    if (status == statusObj.error) {
      dispatch(setAlertData({ ...errorAlertObj, message }));
      dispatch(openAlert());
      dispatch(resetUpdateServiceProviderState());
    }
  }, [dispatch, message, status]);

  return (
    <PageLayout header={title} id="serviceProvider">
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
          <FormTextAreaInput
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

          <FormActionButtons handleCancel={() => {}} status={status} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default UpdateServiceProvider;
