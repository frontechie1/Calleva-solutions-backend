import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableIcons } from "../../presentation/routes_icons/iconsHolder";
import PuffLoader from "react-spinners/PuffLoader";

import Placeholder from "../../assets/imgs/person_placeholder.jpg";
import { statusObj } from "../../service/features/customer/customerSlice";
import
  {
    selectSideTwo,
    toggleSideTwo,
  } from "../../service/features/navigation_slice";
import { resetPaymentStatus } from "../../service/features/paymentSlice";
import
  {
    filters,
    getAllData,
    readAllData,
    removerEmail,
    setEmail,
    setFilter,
  } from "../../service/features/serviceProviderAndCustomerSlice";

function SideBarTwo() {
  const dispatch = useDispatch();
  const status = useSelector(
    (state) => state.serviceProviderAndCustomer.status
  );
  const selectedFilter = useSelector(
    (state) => state.serviceProviderAndCustomer.filter
  );

  const data = useSelector(getAllData);
  const openNav = useSelector(selectSideTwo);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
    dispatch(readAllData());
  };

  const handleSelectedPerson = (email) => {
    dispatch(setEmail(email));
    dispatch(resetPaymentStatus());
    dispatch(toggleSideTwo());
  };

  useEffect(() => {
    if (status == statusObj.idle) {
      console.log("entered");
      dispatch(readAllData());
    }
  }, [dispatch, status]);

  return (
    <div
      className={`bg-white min-h-[100vh] px-5 pt-10 mt-5 ${
        openNav ? "block" : "hidden"
      } overflow-hidden absolute w-[25rem] min-h-screen overflow-y-auto right-0 shadow-md z-100 `}
    >
      <div
        className="h-10 w-10 hover:bg-slate text-[2rem] absolute right-3 top-4"
        onClick={() => dispatch(toggleSideTwo())}
      >
        <tableIcons.close />
      </div>
      <button  onClick={() => {
        dispatch(removerEmail());
        dispatch(resetPaymentStatus())
      }} className="mb-5 text-[1.3rem] py-2 block hover:bg-slate">
        All Payments
      </button>
      <div className="border border-black p-2 w-full">
        <select
          onChange={handleChange}
          value={selectedFilter}
          defaultValue={filters.customers}
          className="w-full border-none outline-none focus:outline-none"
        >
          <option value={filters.customers} className="text-[1.5rem]">
            {filters.customers}
          </option>
          <option value={filters.suppliers} className="text-[1.5rem]">
            {filters.suppliers}
          </option>
        </select>
      </div>
      <div className="my-5">
        <span className="text-[1.5rem] font-bold">{selectedFilter}</span>
        <div className="relative">
          {status === statusObj.pending && (
            <div className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <PuffLoader color="#fb8b24" size={100} />
            </div>
          )}
          {data.map((item) => {
            return (
              <div
                key={item}
                onClick={() => handleSelectedPerson(item.email)}
                className="flex items-center justify-start py-2 hover:bg-slate"
              >
                <img
                  src={item.profilePicture ? item.profilePicture : Placeholder}
                  alt=""
                  className="w-20 h-20 rounded-full  mr-4"
                />
                <span className="text-[1.5rem]">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBarTwo;
