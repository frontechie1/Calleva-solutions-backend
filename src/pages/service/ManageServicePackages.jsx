import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/Table";
import {
  servicePackageTableAction,
  servicePackageTableHeaders,
} from "../../presentation/services/servicePackageTableModel";
import { statusObj } from "../../service/features/customer/customerSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllServices,
  readAllServices,
  searchServices,
} from "../../service/features/serviceSlice";
import { dialogContentTye } from "../../service/features/navigation_slice";

// eslint-disable-next-line react/prop-types
function ManageServicePackages({ title }) {
  const dispatch = useDispatch();
  const servicesList = useSelector(getAllServices);
  const status = useSelector((state) => state.service.status);

  useEffect(() => {
    if (status === statusObj.idle) {
      dispatch(readAllServices());
    }
  }, [dispatch, status]);

  return (
    <PageLayout header={title} id="servicePackage">
      <Container>
        <SearchBar
          handleChange={() => {}}
          handleSubmit={(value) => dispatch(searchServices(value))}
          handleClear={() => dispatch(readAllServices())}
          placeholder={""}
          searchBy="Search by Name, Category or SubCategory"
          searchValue={searchServices}
        />
        <Table
          columnHeaders={servicePackageTableHeaders}
          data={servicesList}
          status={status}
          handleChecked={() => {}}
          title="Service Packages List"
          tableActions={servicePackageTableAction}
          dialogTitle="Service Package Detail"
          dialogType={dialogContentTye.profile}
          selectedActionOptions={[]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServicePackages;
