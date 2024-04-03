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
  getAllCustomers,
  readAllCustomers,
  searchUser,
  statusObj,
} from "../../service/features/customer/customerSlice";

// eslint-disable-next-line react/prop-types
function ManageMemberShipPlan({ title }) {
  const dispatch = useDispatch();
  const customerList = useSelector(getAllCustomers);
  const status = useSelector((state) => state.customer.status);
  const errorMessage = useSelector((state) => state.customer.errorMessage);

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
          status={status}
          errorMessage={errorMessage}
          data={customerList}
          columnHeaders={customerListTableHeaders}
          handleChecked={() => {}}
          tableActions={customerListTableAction}
          selectedActionOptions={[]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageMemberShipPlan;
