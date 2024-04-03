/* eslint-disable react/prop-types */
import { useState } from "react";

function TableFooterActionSection({
  handleSelectAll,
  handleUnselectAll,
  selectionObject,
}) {
  const [selectedOption, setSelectedOption] = useState(-1);
  const styles =
    "bg-primary w-full md:w-max hover:bg-green-700 text-[1.5rem] text-white p-3 rounded";
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
      <button className={styles} onClick={handleSelectAll}>
        Select All
      </button>
      <button className={`${styles} h-max m-4`} onClick={handleUnselectAll}>
        Unselect All
      </button>
      <div className="w-20rem flex flex-row items-center justify-center">
        <div className="border border-black p-2">
          <select
            className="w-[20rem] outline-none focus:outline-none py-2 px-2"
            onChange={(e) => {
              const id = e.currentTarget.value;
              console.log(id);
              setSelectedOption(id);
            }}
          >
            {selectionObject.map((value, i) => {
              return (
                <option key={value} value={i} className="p-2 text-[1.5rem]">
                  {value.title}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className={`${styles} h-max ml-4`}
          onClick={() => {
            if (selectedOption < -1)
              selectionObject[Number.parseInt(selectedOption)].handler;
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default TableFooterActionSection;
