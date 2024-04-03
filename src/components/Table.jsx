import { Alert } from "@material-tailwind/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";
import { errorAlertObj } from "../presentation/routes_icons/alertModel";
import { statusObj } from "../service/features/customer/customerSlice";
import {
  dialogContentTye,
  openAlert,
  setAlertData,
} from "../service/features/navigation_slice";
import TableFooterActionSection from "./TableFooterActionSection";
import TableRow from "./TableRow";
/* eslint-disable react/prop-types */
function Table({
  title,
  columnHeaders,
  data,
  handleChecked,
  checkedState,
  tableActions,
  status,
  checkAble,
  errorMessage = "",
  setCheckedAction,
  getCheckedAction,
  checkAll,
  uncheckAll,
  dialogTitle,
  dialogType = dialogContentTye.table,
  selectedActionOptions,
}) {
  const dispatch = useDispatch();
  const statusState = status;

  useEffect(() => {
    console.log("came here");
    console.log("from table", statusState);
    if (statusState == statusObj.error) {
      dispatch(
        setAlertData({
          ...errorAlertObj,
          message: errorMessage,
        })
      );
      dispatch(openAlert());
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
          <tr className="text-[1.5rem]">
            {checkAble && (
              <th className="border border-slate p-4">
                <input
                  type="checkbox"
                  checked={checkedState}
                  onChange={(e) => {
                    dispatch(handleChecked(e.target.checked));
                    if (e.target.checked == true) checkAll();
                    if (e.target.checked == false) uncheckAll();
                  }}
                />
              </th>
            )}
            {columnHeaders.map((value, i) => {
              return (
                <th
                  key={i}
                  onClick={value.action}
                  className="border border-slate"
                >
                  <span className="flex  font-bold ">
                    <span className="font-normal leading-none opacity-70 text-primary mr-3">
                      {value.label}
                    </span>
                    {value.Icon && <value.Icon className="text-black" />}
                  </span>
                </th>
              );
            })}
            <th className="border border-slate py-4 font-normal leading-none opacity-70 text-primary">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            (status =
              statusObj.fulfilled && data.length > 0 ? (
                data.map((value, i) => {
                  return (
                    <TableRow
                      data={value}
                      key={i}
                      tableHeaders={columnHeaders}
                      tableActions={tableActions}
                      checkAble={checkAble}
                      setCheckedAction={setCheckedAction}
                      getCheckedAction={getCheckedAction}
                      handleSuperCheck={handleChecked}
                      dialogContentType={dialogType}
                      dialogTitle={dialogTitle}
                    />
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columnHeaders.length + 2}>
                    <Alert className="bg-slate text-[1.5rem] py-3 w-full text-black rounded-none ">
                      No data available
                    </Alert>
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
      {checkAble && (
        <TableFooterActionSection
          handleSelectAll={() => {
            dispatch(handleChecked(true));
            checkAll();
          }}
          handleUnselectAll={() => {
            dispatch(handleChecked(false));
            uncheckAll();
          }}
          selectionObject={selectedActionOptions}
        />
      )}
    </div>
  );
}

export default Table;
