import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/Table";
import {
  serviceRequestTableActions,
  serviceRequestTableHeaders,
} from "../../presentation/services/serviceRequestTableModel";

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusObj } from "../../service/features/customer/customerSlice";
import {
  filters,
  getFilterValue,
  getSelectedEmail,
} from "../../service/features/serviceProviderAndCustomerSlice";
import {
  getAllServiceRequests,
  readAllServiceRequests,
  readServiceRequestsByCustomerEmail,
  readServiceRequestsByServiceProviderEmail,
  resetServiceRequestStatus,
  searchServiceRequests,
} from "../../service/features/serviceRequestSlice";

// eslint-disable-next-line react/prop-types
function ManageServiceRequest({ title }) {
  const dispatch = useDispatch();
  const serviceRequests = useSelector(getAllServiceRequests);
  const status = useSelector((state) => state.serviceRequest.status);
  const selectedEmail = useSelector(getSelectedEmail);
  const selectedFilter = useSelector(getFilterValue);

  const loadData = useCallback(() => {
    if (status == statusObj.idle) {
      if (selectedEmail && selectedFilter == filters.customers) {
        dispatch(readServiceRequestsByCustomerEmail(selectedEmail));
      } else if (selectedEmail && selectedFilter == filters.suppliers) {
        dispatch(readServiceRequestsByServiceProviderEmail(selectedEmail));
      } else {
        dispatch(readAllServiceRequests());
      }
    }
  }, [dispatch, selectedEmail, selectedFilter, status]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <PageLayout header={title} id="serviceOrder">
      <Container sideBarVisible={true}>
        <SearchBar
          handleChange={() => {}}
          handleSubmit={(value) => dispatch(searchServiceRequests(value))}
          handleClear={() => dispatch(resetServiceRequestStatus())}
          placeholder={""}
          searchBy="Search by Request Number, Customer Name or Category"
          searchValue={searchServiceRequests}
        />
        <Table
          columnHeaders={serviceRequestTableHeaders}
          data={serviceRequests}
          handleChecked={() => {}}
          title="Service Requests List"
          status={status}
          tableActions={serviceRequestTableActions}
          dialogTitle="Service Request Detail"
          selectedActionOptions={[]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServiceRequest;
