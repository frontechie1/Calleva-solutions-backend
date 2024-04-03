import FormActionButtons from "../../components/form/FormActionButtons";
import FormImageInput from "../../components/form/FormImageInput";
import FormSectionDivider from "../../components/form/FormSectionDivider";
import FormTextAreaInput from "../../components/form/FormTextAreaInput";
import FormTextInput from "../../components/form/FormTextInput";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";

// eslint-disable-next-line react/prop-types
function SiteSettings({ title }) {
  const handleChange = () => {};
  const handleSave = (e) => {
    e.preventDefault();
    console.log(e);
    const formDate = new FormData(e.target);
    console.log(formDate.get(""));
    console.log(Object.fromEntries(formDate));
  };
  const handleCancel = () => {
    window.history.back();
  };

  return (
    <PageLayout header={title}>
      <Container>
        <form action="" onSubmit={handleSave}>
          <FormSectionDivider title="Site Information" />
          <FormTextInput
            label="Site Title"
            name="siteTitle"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Company Name"
            name="companyName"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Contact Number"
            name="contactNumber"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Contact Email"
            name="contactEmail"
            handleChange={handleChange}
          />
          <FormTextAreaInput
            label="Company Address"
            name="companyAddress"
            handleChange={handleChange}
          />
          <FormImageInput
            label="Home Logo"
            name="homeIcon"
            placeholder="no file chosen"
            helperText="Supported File Types: png (Max. 2MB) (Best view:183 x 46px)"
            handleChange={handleChange}
          />
          <FormImageInput
            label="Logo"
            placeholder="no file chosen"
            name="logo"
            helperText="Supported File Types: png (Max. 2MB) (Best view:183 x 46px)"
            handleChange={handleChange}
          />
          <FormImageInput
            label="Fav Icon"
            name="favIcon"
            placeholder="no file chosen"
            helperText="Supported File Types: png (Max. 2MB) (Best view:183 x 46px)"
            handleChange={handleChange}
          />
          <FormSectionDivider title="Social Links" />
          <FormTextInput
            label="Facebook Link"
            name="facebookLink"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Twitter Link"
            name="twitterLink"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Google+ Link"
            name="googleLink"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Instagram Link"
            name="instagramLink"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Linkedin Link"
            name="linkedinLink"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Pinterest Link"
            name="pinterestLink"
            handleChange={handleChange}
          />
          <FormTextInput
            label="YoutubeLink"
            name="youtubeLink"
            handleChange={handleChange}
          />

          <FormSectionDivider title="Paypal Settings" />
          <div className="flex flex-col  lg:grid lg:grid-cols-[2fr_6fr] my-10 w-full items-start lg:items-center  justify-start">
            <label
              htmlFor="Payment Mode"
              className=" whitespace-nowrap mr-10 font-semibold text-[1.5rem] lg:text-right"
            >
              Payment Mode
            </label>
            <div>
              <span className="text-[1.5rem] mr-5">
                <input
                  type="radio"
                  name="paymentMode"
                  className="mr-2"
                  onChange={handleChange}
                />
                Sandbox
              </span>

              <span className="text-[1.5rem]">
                <input
                  type="radio"
                  name="paymentMode"
                  className="mr-2"
                  onChange={handleChange}
                />
                Live
              </span>
            </div>
          </div>
          <FormTextInput
            label="Paypal Email Address"
            name="paypalEmailAddress"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Paypal Api Username"
            name="PaypalApiUsername"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Paypal Api Password"
            name="PaypalApiPassword"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Paypal API Signature "
            name="paypalAPISignature "
            handleChange={handleChange}
          />
          <FormTextInput
            label="Collection Subscription Key"
            name="collectionSubscriptionKey "
            handleChange={handleChange}
          />
          <FormTextInput
            label="Disbursement Subscription Key"
            name="disbursementSubscriptionKey"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Currency"
            name="currency"
            handleChange={handleChange}
          />
          <FormSectionDivider title="Paypal Settings" />
          <FormTextInput
            label="Service Fee Deduction (%)"
            name="serviceFeeDeduction"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Service Refund Policy (%)"
            name="serviceRefundPolicy"
            handleChange={handleChange}
          />
          <FormActionButtons handleCancel={handleCancel} />
        </form>
      </Container>
    </PageLayout>
  );
}

export default SiteSettings;
