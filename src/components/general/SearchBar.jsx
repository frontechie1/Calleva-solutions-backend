/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchBar({
  placeholder,
  searchValue,
  handleSubmit,
  searchBy,
  handleClear = () => {},
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const clearSearch = () => {
    setValue("");
    handleClear();
  };
  return (
    <div className="self-end flex flex-col">
      <span className="text-[1.2rem] mb-4">{searchBy}</span>
      <div className="flex flex-row  items-start">
        <div className="border border-black w-[20rem]  py-2 px-1 mb-5 md:mb-0 mr-3">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              if (searchValue) {
                console.log(value);
                dispatch(searchValue(e.target.value));
              }
              setValue(e.target.value);
            }}
            className="outline-none focus:outline-none w-full text-[1.2rem] text-black"
          />
        </div>
        <Button
          className="bg-primary md:mx-5 text-[1.2rem] mb-2 md:mb-0 w-[12rem] mr-3"
          onClick={() => handleSubmit(value)}
        >
          Search
        </Button>
        <Button
          className="bg-slate text-[1.2rem] text-black w-[12rem]"
          onClick={clearSearch}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
