import FormImageInput from "../../components/form/FormImageInput";
import FormSectionDivider from "../../components/form/FormSectionDivider";
import FormTextInput from "../../components/form/FormTextInput";

import FormActionButtons from "../../components/form/FormActionButtons";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function HomePageContent({ title }) {
  const handleSave = (e) => {
    e.preventDefault();
    console.log(e);
    const formDate = new FormData(e.target);
    console.log(formDate.get(""));
    console.log(Object.fromEntries(formDate));
  };
  const handleCancel = () => {};
  return (
    <PageLayout header={title}>
      <Container>
        <form action="" onSubmit={handleSave}>
          <FormSectionDivider title="Banner Section" />
          <FormImageInput
            label="Banner image"
            helperText="Supported File Types: png (Max. 2MB) (Best view:1920 x 539px)"
            name="bannerImage"
            placeholder="No file uploaded"
          />
          <FormTextInput label="Home Search title" name="homeSearchTitle" />
          <FormTextInput
            label="Home Search slogan text"
            name="homeSearchSloganText"
          />
          <FormTextInput
            label="Home Search example text "
            name="homeSearchExampleText "
          />
          <FormSectionDivider title="Why Choose US" />
          <FormTextInput label="Choose Name (1)" name="chooseName1" />
          <FormTextInput
            label="Choose Description (1)"
            name="chooseDescription1"
          />
          <FormImageInput
            label="Choose Icon (1)"
            name="chooseIcon1"
            helperText="Supported File Types: png (Max. 2MB) (Best view:80 x 80px)"
          />
          <FormTextInput label="Choose Name (2)" name="chooseName2" />
          <FormTextInput
            label="Choose Description (2)"
            name="chooseDescription2"
          />
          <FormImageInput
            label="Choose Icon (2)"
            name="chooseIcon2"
            helperText="Supported File Types: png (Max. 2MB) (Best view:80 x 80px)"
          />
          <FormTextInput label="Choose Name (3)" name="chooseName3" />
          <FormTextInput
            label="Choose Description (3)"
            name="chooseDescription3"
          />
          <FormImageInput
            label="Choose Icon (3)"
            name="chooseIcon3"
            helperText="Supported File Types: png (Max. 2MB) (Best view:80 x 80px)"
          />
          <FormTextInput label="Choose Name (4)" name="chooseName4" />
          <FormTextInput
            label="Choose Description (4)"
            name="chooseDescription4"
          />
          <FormImageInput
            label="Choose Icon (4)"
            name="chooseIcon4"
            helperText="Supported File Types: png (Max. 2MB) (Best view:80 x 80px)"
          />
          <FormSectionDivider title="Happiness Section" />
          <FormTextInput label="Happiness Title" name="happinessTitle" />
          <FormTextInput
            label="Happiness Description"
            name="happinessDescription"
          />
          <FormImageInput
            label="Happiness Image"
            name="happinessImage"
            helperText="Supported File Types: png (Max. 2MB) (Best view:80 x 80px)"
          />
          <FormSectionDivider title="Categories Section" />
          <FormTextInput label="Categories Title" name="categoriesTitle" />
          <FormTextInput
            label="Categories Description"
            name="categoriesDescription"
          />
          <FormSectionDivider title="Mobile Application Section" />
          <FormTextInput label="Application Title" name="applicationTitle" />
          <FormTextInput
            label="Application Description"
            name="applicationDescription"
          />
          <FormImageInput
            label="Application Image"
            name="applicationImage"
            helperText="Supported File Types: png (Max. 2MB) (Best view:80 x 80px)"
          />
          <FormTextInput
            label="iPhone Application URL"
            name="iPhonepplicationURL"
            type="url"
          />
          <FormTextInput
            label="Android Application URL"
            name="androidApplicationURL"
            type="url"
          />
          <FormSectionDivider title="Service Provider Paid Service Request" />

          <FormTextInput
            label="Service Request Number"
            name="serviceRequestNumber"
          />
          <FormActionButtons handleCancel={handleCancel} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default HomePageContent;
