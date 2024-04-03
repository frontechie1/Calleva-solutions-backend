/* eslint-disable react/prop-types */
import { useState } from "react";

function FormImageInput({
  label,
  placeholder = "",
  name,
  handleChange = () => {},
  file,
  helperText,
}) {
  const [image, setImage] = useState("");
  const [error, setError] = useState({
    hasError: false,
    errorMessage: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const maxSizeInBytes = 1024 * 1024 * 2;

    if (file) {
      const extension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        e.target.value = null;
        setError({
          errorMessage: "Only JPG, JPEG, or PNG files are allowed.",
          hasError: true,
        });
        setImage("");
      } else {
        if (file && file.size > maxSizeInBytes) {
          setError({
            errorMessage:
              "File size exceeds the limit. Please select a smaller file.",
            hasError: true,
          });
          e.target.value = null;
          setImage("");
        } else {
          setImage(URL.createObjectURL(file));
          setError({
            hasError: false,
            errorMessage: "",
          });
          handleChange(e);
        }
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_6fr] my-10 w-full items-start  justify-start">
        <label className=" whitespace-nowrap mr-10 font-semibold text-[1.5rem] lg:text-right">
          {label}
        </label>
        <div className="w-full">
          <div
            className={`border-black w-full border flex items-center justify-start ${
              helperText && "mb-3"
            }  p-2`}
          >
            <input
              type="file"
              onChange={handleImageChange}
              name={name}
              placeholder={placeholder}
              className="rounded-none !text-[1.2rem] w-full"
            />
          </div>
          <span className="text-[1rem]">{helperText}</span>
          {!file && image ? (
            <img
              className=" w-1/6 object-cover object-center"
              src={image}
              alt="nature image"
            />
          ) : file ? (
            <img
              className=" w-1/6 object-contain object-center h-[10rem] "
              src={file}
              alt="nature image"
            />
          ) : file && image ? (
            <img
              className=" w-1/6 object-cover object-center"
              src={file}
              alt="nature image"
            />
          ) : (
            ""
          )}
          {error.hasError && (
            <p className="text-[1.2rem] text-red-400">{error.errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormImageInput;
