import FormActionButtons from "../../components/form/FormActionButtons";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function ChangeEmail({ title }) {
  const handleCancel = () => {
    window.history.back();
  };
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <PageLayout header={title}>
      <Container>
        <form onSubmit={handleSave}>
          <div className="w-full">
            <FormTextInput
              label={"Current Email"}
              name="currentEmail"
              type="email"
            />
            <FormTextInput label={"New Email"} name="newEmail" type="email" />
            <FormTextInput
              label={"Confirm Email"}
              name="confirmEmail"
              type="email"
            />
          </div>
          <FormActionButtons handleCancel={handleCancel} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default ChangeEmail;
