import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/Table";

import routes from "../../presentation/routes_icons/routes";
import {
  serviceProviderTableAction,
  serviceProviderTableHeaders,
} from "../../presentation/serviceProviders/serviceProviderTableModel";
import { statusObj } from "../../service/features/customer/customerSlice";
import { dialogContentTye } from "../../service/features/navigation_slice";
import {
  checkAllServiceProviders,
  getAllServiceProviders,
  getSelectedServiceProviders,
  getSuperCheckedState,
  readAllServiceProviders,
  searchServiceProvider,
  setSelectedServiceProvider,
  setSuperCheck,
  uncheckAllServiceProvides,
} from "../../service/features/serviceProvider/serviceProviderSlice";

// eslint-disable-next-line react/prop-types
function ManageServiceProviderList({ title }) {
  const dispatch = useDispatch();
  const supplierList = useSelector(getAllServiceProviders);
  const status = useSelector((state) => state.serviceProvider.status);
  const message = useSelector((state) => state.serviceProvider.errorMessage);
  const checkState = useSelector(getSuperCheckedState);
  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllServiceProviders());
    }
  }, [dispatch, status]);

  return (
    <PageLayout header={title} id="serviceProvider">
      <Container>
        <div className="flex justify-between items-center ">
          <SearchBar
            placeholder="Search by"
            searchBy="Search by Username or Email Address"
            handleChange={() => {}}
            handleSubmit={(value) => dispatch(searchServiceProvider(value))}
            handleClear={() => dispatch(readAllServiceProviders())}
            searchValue={searchServiceProvider}
          />
          <Link
            to={
              routes["Manage-service-providers"]["links"][
                "Create-Service-Provider"
              ]["url"]
            }
          >
            <Button className="bg-slate px-2 text-black text-[1.2rem] py-3 h-max whitespace-nowrap ml-5 mt-6">
              Add Service Provider
            </Button>
          </Link>
        </div>

        <Table
          title="Service Provider List"
          data={supplierList}
          columnHeaders={serviceProviderTableHeaders}
          checkedState={checkState}
          handleChecked={setSuperCheck}
          status={status}
          checkAble={true}
          tableActions={serviceProviderTableAction}
          errorMessage={message}
          setCheckedAction={setSelectedServiceProvider}
          getCheckedAction={getSelectedServiceProviders}
          checkAll={() => dispatch(checkAllServiceProviders())}
          uncheckAll={() => dispatch(uncheckAllServiceProvides())}
          dialogTitle="Service Provider Detail"
          dialogType={dialogContentTye.profile}
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

export default ManageServiceProviderList;
//AN OUBJECT
//
