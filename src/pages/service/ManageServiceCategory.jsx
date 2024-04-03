import SearchBar from "../../components/general/SearchBar";
import Container from "../../components/layout/Container";
import PageLayout from "../../components/layout/PageLayout";
import Table from "../../components/Table";
import {
  serviceCategoryTableActions,
  serviceCategoryTableHeaders,
} from "../../presentation/services/serviceCategoryTableModel";

// eslint-disable-next-line react/prop-types
function ManageServiceCategory({ title }) {
  return (
    <PageLayout header={title} id="category">
      <Container>
        <SearchBar
          handleSubmit={() => {}}
          placeholder=""
          handleChange={() => {}}
          searchBy="Search by Category Name"
        />
        <Table
          title="Plans List"
          data={[]}
          columnHeaders={serviceCategoryTableHeaders}
          handleChecked={() => {}}
          tableActions={serviceCategoryTableActions}
          selectedActionOptions={[]}
        />
      </Container>
    </PageLayout>
  );
}

export default ManageServiceCategory;
