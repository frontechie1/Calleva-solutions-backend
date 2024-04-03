/* eslint-disable react/prop-types */
import TableActionsData from "./TableActionsData";

function TableRow({ data, handleSelected, tableActions, checkAble, keys }) {
  return (
    <tr className="odd:bg-blue-gray-50/50">
      {checkAble && (
        <td className="p-4 border border-slate">
          <input type="checkbox" onChange={handleSelected} />
        </td>
      )}
      {keys.map((value, i) => {
        if (value.toLowerCase().indexOf("profile") != -1) {
          return (
            <td
              key={i}
              className="p-2 text-[1.3rem] text-black border border-slate"
            >
              <img src={data[value]} alt="" className="w-20 h-20" />
            </td>
          );
        } else if (value == "status") {
          return (
            <td
              key={i}
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
              key={i}
              className="p-2 text-[1.3rem] text-black border border-slate"
            >
              <a href={data[value]} alt="" className="w-20 h-20" />
            </td>
          );
        } else {
          return (
            <td
              key={i}
              className="p-2 text-[1.3rem] text-black border border-slate"
            >
              {data[value]}
            </td>
          );
        }
      })}
      <TableActionsData actions={tableActions} />
    </tr>
  );
}

export default TableRow;
