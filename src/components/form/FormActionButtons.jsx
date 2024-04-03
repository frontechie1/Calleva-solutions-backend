import { Button } from "@material-tailwind/react";
import ClipLoader from "react-spinners/ClipLoader";
import { statusObj } from "../../service/features/customer/customerSlice";

// eslint-disable-next-line react/prop-types
function FormActionButtons({ handleCancel, status }) {
  return (
    <div className="lg:grid lg:grid-cols-[2fr_6fr]">
      <div></div>
      <div className="flex">
        <Button
          className="bg-primary text-[1.2rem] text-white mr-3 px-3 min-w-[10rem] flex items-center justify-center"
          type="submit"
        >
          {status == statusObj.pending && <ClipLoader size={10} />}
          <span className="ml-3">Save</span>
        </Button>
        <Button
          className="bg-white text-[1.2rem] text-black px-3 min-w-[10rem]"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default FormActionButtons;
