import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/Table";
import {
  managePaymentListHeaders,
  paymentActions,
} from "../../presentation/payments/managePaymentModel";
import { statusObj } from "../../service/features/customer/customerSlice";
import {
  getAllPayments,
  readAllPayments,
  readCustomerPaymentsByEmail,
  readServicePaymentsByEmail,
  resetPaymentStatus,
  searchPayment,
} from "../../service/features/paymentSlice";
import {
  filters,
  getFilterValue,
  getSelectedEmail,
} from "../../service/features/serviceProviderAndCustomerSlice";

// eslint-disable-next-line react/prop-types
function ManagePayments({ title }) {
  const dispatch = useDispatch();
  const paymentList = useSelector(getAllPayments);
  const status = useSelector((state) => state.payment.status);
  const selectedEmail = useSelector(getSelectedEmail);
  const selectedFilter = useSelector(getFilterValue);

  const loadData = useCallback(() => {
    if (status == statusObj.idle) {
      if (selectedEmail && selectedFilter == filters.customers) {
        dispatch(readCustomerPaymentsByEmail(selectedEmail));
      } else if (selectedEmail && selectedFilter == filters.suppliers) {
        dispatch(readServicePaymentsByEmail(selectedEmail));
      } else {
        dispatch(readAllPayments());
      }
    }
  }, [dispatch, selectedEmail, selectedFilter, status]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <PageLayout header={title} id="payment">
      <Container sideBarVisible={true}>
        <SearchBar
          handleSubmit={(value) => dispatch(searchPayment(value))}
          handleClear={() => dispatch(resetPaymentStatus())}
          placeholder={""}
          searchBy="Search by Request Number, Customer Fullname, Transaction ID"
          searchValue={searchPayment}
        />

        <Table
          title="Payment List"
          data={paymentList}
          checkAll={false}
          columnHeaders={managePaymentListHeaders}
          handleChecked={() => {}}
          status={status}
          dialogTitle="Payment Details"
          tableActions={paymentActions}
          selectedActionOptions={[]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManagePayments;
