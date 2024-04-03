import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";
import { errorAlertObj } from "../../presentation/routes_icons/alertModel";
import { statusObj } from "../../service/features/customerSlice";
import {
  setAlertData,
  toggleAlert,
} from "../../service/features/navigation_slice";
import TableRow from "./TableRow";
/* eslint-disable react/prop-types */
function Table({
  title,
  columnHeaders,
  data,
  handleChecked,
  tableActions,
  status,
  checkAble = false,
  errorMessage = "",
}) {
  const dispatch = useDispatch();
  console.log("from table", status);
  const statusState = status;

  useEffect(() => {
    console.log("came here");
    console.log("from table", statusState);
    if (statusState == statusObj.error) {
      errorAlertObj.message = errorMessage;
      dispatch(setAlertData(errorAlertObj));
      dispatch(toggleAlert());
    }
  }, [dispatch, errorMessage, statusState]);

  return (
    <div className="mt-20 relative">
      {status === statusObj.pending && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2  ">
          <PuffLoader color="#fb8b24" size={100} />
        </div>
      )}
      <div className="mb-5 text-black text-[1.5rem]">
        <span className="block py-2">{title}</span>
        <hr />
      </div>
      <table className="w-full min-w-max table-auto text-left px-3 py-4 overflow-x-scroll">
        <thead>
          <tr>
            {checkAble && (
              <th className="border border-slate p-4">
                <input type="checkbox" onChange={handleChecked} />
              </th>
            )}
            {columnHeaders.map((value, i) => {
              return (
                <th
                  key={i}
                  onClick={value.action}
                  className="border border-slate"
                >
                  <span className="flex text-[1.5rem] font-bold ">
                    <span className="font-normal leading-none opacity-70 text-primary mr-3">
                      {value.label}
                    </span>
                    {value.Icon && <value.Icon className="text-black" />}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {
            (status =
              statusObj.fulfilled &&
              data.map((value, i) => {
                return (
                  <TableRow
                    data={value}
                    key={i}
                    keys={columnHeaders
                      .filter((value) => value.id != "")
                      .map((value) => value.id)}
                    tableActions={tableActions}
                    checkAble={checkAble}
                  />
                );
              }))
          }
        </tbody>
      </table>
   
    </div>
  );
}

export default Table;
