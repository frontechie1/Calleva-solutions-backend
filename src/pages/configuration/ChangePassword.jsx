import FormActionButtons from "../../components/form/FormActionButtons";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function ChangePassword({ title }) {
  const handleCancel = () => {};
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <PageLayout header={title}>
      <Container>
        <form onSubmit={handleSave}>
          <div>
            <FormTextInput label={"Current Password"} name="currentPassword" />
            <FormTextInput label={"New Password"} name="newPassword" />
            <FormTextInput label={"Confirm Password"} name="confirmPassword" />
          </div>
          <FormActionButtons handleCancel={handleCancel} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default ChangePassword;
