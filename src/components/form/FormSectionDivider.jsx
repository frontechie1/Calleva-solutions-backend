import { Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function FormSectionDivider({ title }) {
  return (
    <>
      <Typography className="text-[1.7rem]  px-2 py-3  block">
        {title}
      </Typography>
    </>
  );
}

export default FormSectionDivider;
