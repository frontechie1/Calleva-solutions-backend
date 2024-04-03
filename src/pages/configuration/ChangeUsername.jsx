import FormActionButtons from "../../components/form/FormActionButtons";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function ChangeUsername({ title }) {
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
        <form className="w-full" onSubmit={handleSave}>
          <div>
            <FormTextInput
              label={"Current Username"}
              required={false}
              name="currentUsername"
            />
            <FormTextInput label={"New Username"} name="newUsername" />
            <FormTextInput label={"Confirm Username"} name="confirmUsername" />
          </div>
          <FormActionButtons handleCancel={handleCancel} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default ChangeUsername;
