import withAuth from "../../components/auth/WithAuth";
import DashboardTile from "./DashboardTile.jsx";
import PageLayout from "../../components/layout/PageLayout.jsx";
import dashboard from "../../presentation/dashboard/dashboardModel";

// eslint-disable-next-line react/prop-types
const DashBoard = withAuth(({ title }) => {
  return (
    <PageLayout header={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 flex-1 md:justify-between items-center justify-center">
        {Object.values(dashboard).map((item, id) => (
          <DashboardTile
            key={id}
            title={item.title}
            path={item.link}
            Icon={item.icon}
            colors={item.colors}
          />
        ))}
      </div>
      <div></div>
    </PageLayout>
  );
});

export default DashBoard;
