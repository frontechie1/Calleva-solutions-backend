/* eslint-disable react/prop-types */
function FormTextAreaInput({
  name,
  required = true,
  handleChange,
  value,
  label,
}) {
  return (
    <div className="flex flex-col  lg:grid lg:grid-cols-[2fr_6fr] my-10 w-full items-start   justify-start">
      <label
        htmlFor="Company Address"
        className="lg:-mb-5 whitespace-nowrap mr-10 font-semibold text-[1.5rem] lg:text-right"
      >
        {label}
        {required && <sup className="text-primary text-[1rem]">*</sup>}
      </label>
      <div className="border w-full border-black p-2">
        <textarea
          name={name}
          id=""
          cols="30"
          rows="5"
          onChange={handleChange}
          value={value}
          className="bg-transparent w-full outline-none focus:outline-none !text-[1.2rem]"
        />
      </div>
    </div>
  );
}

export default FormTextAreaInput;
