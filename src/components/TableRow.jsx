/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDialogTitle,
  setModalContent,
  toggleDialog,
} from "../service/features/navigation_slice";
import TableActionsData from "./TableActionsData";

const TableCheckBox = ({
  id,
  setAction,
  getAction,
  handleSuperCheck,
  checkAble,
}) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(getAction(id));

  useEffect(() => {
    if (checkAble) dispatch(setAction({ id, isChecked: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <input
      type="checkbox"
      onChange={(e) => {
        console.log("clicked", isChecked);
        dispatch(setAction({ id, isChecked: e.target.checked }));

        if (!e.target.checked) {
          dispatch(handleSuperCheck(false));
        }
      }}
      checked={isChecked ?? false}
    />
  );
};

function TableRow({
  data,
  setCheckedAction,
  getCheckedAction,
  tableActions,
  checkAble,
  handleSuperCheck,
  dialogContentType,
  tableHeaders,
  dialogTitle,
}) {
  const dispatch = useDispatch();
  return (
    <tr className="odd:bg-blue-gray-50/50">
      {checkAble && (
        <td className="p-4 border border-slate">
          <TableCheckBox
            setAction={setCheckedAction}
            getAction={getCheckedAction}
            handleSuperCheck={handleSuperCheck}
            id={data._id}
            checkAble={checkAble}
          />
        </td>
      )}
      {tableHeaders
        .filter((value) => value.id != "")
        .map((value) => value.id)
        .map((value) => {
          if (value.toLowerCase().indexOf("profile") != -1) {
            return (
              <td
                key={value}
                className="p-2 text-[1.3rem] text-black border border-slate"
              >
                <img src={data[value]} alt="" className="w-20 h-20" />
              </td>
            );
          } else if (value == "status") {
            return (
              <td
                key={value}
                className="p-2 text-[1.3rem] border border-slate text-white"
              >
                <span className="bg-blue-700 px-2 py-2 block">
                  {data[value]}
                </span>
              </td>
            );
          } else if (value == "Availability") {
            return (
              <td
                key={value}
                className="p-2 text-[1.3rem] text-black border border-slate"
              >
                <a href={data[value]} alt="" className="w-20 h-20" />
              </td>
            );
          } else {
            return (
              <td
                key={value}
                className="p-2 text-[1.3rem] text-black border border-slate"
              >
                {data[value]}
              </td>
            );
          }
        })}
      <TableActionsData
        actions={tableActions.map((action) => {
          const obj = action.icons.map((actionObj) => {
            if (actionObj.key == "edit" && actionObj.type == "link") {
              let link = `${actionObj.link}/${data._id}`;
              actionObj = {
                ...actionObj,
                link,
              };
              return actionObj;
            }

            if (actionObj.key == "visible" && actionObj.type == "button") {
              actionObj = {
                ...actionObj,
                handler: () =>
                {
                  dispatch(setDialogTitle(dialogTitle))
                  dispatch(
                    setModalContent({
                      data: { tableHeaders, content: data },
                      type: dialogContentType,
                    })
                  );
                  dispatch(toggleDialog());
                },
              };
            }
            return actionObj;
          });

          return {
            icons: obj,
          };
        })}
      />
    </tr>
  );
}

export default TableRow;
