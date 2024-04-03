import { useDispatch, useSelector } from "react-redux";
// import PuffLoader from "react-spinners/PuffLoader";

import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/Table";

import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  customerListTableAction,
  customerListTableHeaders,
} from "../../presentation/customers/customerListTableModel";
import routes from "../../presentation/routes_icons/routes";
import {
  checkAllCustomers,
  getAllCustomers,
  getSelectedCustomers,
  getSuperCheckedState,
  readAllCustomers,
  searchUser,
  setSelectedCustomer,
  setSuperCheck,
  statusObj,
  uncheckAllCustomers,
} from "../../service/features/customer/customerSlice";
import { dialogContentTye } from "../../service/features/navigation_slice";

// eslint-disable-next-line react/prop-types
function ManageCustomerList({ title }) {
  const dispatch = useDispatch();
  const customerList = useSelector(getAllCustomers);
  const status = useSelector((state) => state.customer.status);
  const errorMessage = useSelector((state) => state.customer.errorMessage);
  const checkState = useSelector(getSuperCheckedState);

  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllCustomers());
    }
  }, [dispatch, status]);

  return (
    <PageLayout header={title} id="customer">
      <Container>
        <div className="flex justify-between items-center ">
          <SearchBar
            placeholder="Search by"
            searchBy="Search by Username or Email Address"
            handleSubmit={(value) => dispatch(searchUser(value))}
            handleClear={() => dispatch(readAllCustomers())}
            searchValue={searchUser}
          />

          <Link
            to={routes["Manage-Customers"]["links"]["create-customer"]["url"]}
          >
            <Button className="bg-slate px-2 text-black text-[1.2rem] py-3 h-max whitespace-nowrap ml-5 mt-6">
              Add Customer
            </Button>
          </Link>
        </div>

        <Table
          title="Customer List"
          data={customerList}
          columnHeaders={customerListTableHeaders}
          checkAble={true}
          checkedState={checkState}
          handleChecked={setSuperCheck}
          status={status}
          errorMessage={errorMessage}
          tableActions={customerListTableAction}
          setCheckedAction={setSelectedCustomer}
          getCheckedAction={getSelectedCustomers}
          checkAll={() => dispatch(checkAllCustomers())}
          uncheckAll={() => dispatch(uncheckAllCustomers())}
          dialogType={dialogContentTye.profile}
          dialogTitle="Customer Profile Detail"
          selectedActionOptions={[
            {
              title: "Activate",
              handler: () => {
                console.log("activate");
              },
            },
            {
              title: "Deactivate",
              handler: () => {
                console.log("deactivate");
              },
            },
            {
              title: "Delete",
              handler: () => {
                console.log("delete");
              },
            },
          ]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageCustomerList;
