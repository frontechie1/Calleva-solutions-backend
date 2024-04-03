/* eslint-disable react/prop-types */
import TableDialog from "./TableDialog";

function ProfileDialog({ tableHeaders, data }) {
  let profile = "";
  const headers = tableHeaders.filter((value) => {
    if (value.id.toLowerCase().indexOf("profile") != -1) {
      profile = data[value.id];
      return false;
    }
    return true;
  });
  return (
    <div className="flex justify-start items-start">
     {profile && <div className="mr-5 w-[20rem]">
        <img src={profile} alt="" className="object-contain " />
      </div>}
      <TableDialog tableHeaders={headers} data={data} />
    </div>
  );
}

export default ProfileDialog;
