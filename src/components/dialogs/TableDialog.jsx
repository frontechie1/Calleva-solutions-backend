/* eslint-disable react/prop-types */

function TableDialog({ tableHeaders, data }) {
  return (
    <div className="w-full">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="text-[1.5rem] bold text-black bg-slate py-3 text-left">Description</th>
            <th className="text-[1.5rem] bold text-black bg-slate py-3 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {tableHeaders.map((value) => {
            return (
              <tr key={value} className="" >
                <td className="border border-slate text-[1.5rem] py-3">{value.label}</td>
                <td className="border border-slate text-[1.5rem] ">{data[value.id]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableDialog;
