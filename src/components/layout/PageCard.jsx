/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import dashboardModel from "../../presentation/dashboard/dashboardModel";
import { tableIcons } from "../../presentation/routes_icons/iconsHolder";
import withAuth from "../auth/WithAuth";

const PageLayout = withAuth(({ children, header, id }) => {
  let Icon = "";
  if (id) Icon = dashboardModel[id].icon;
  return (
    <div className="flex-1 mx-4 flex lg:w-[50rem] flex-col min-h-screen  my-7 !bg-transparent border-none shadow-none relative">
      <div className="text-[2rem] !shadow-none  !bg-transparent font-bold text-gray-700 py-5  px-5 flex lg:flex-row flex-col justify-between items-center">
        {header}
        <Breadcrumbs separator={">"} className="text-[1.2rem] mt-5 lg:mt-0">
          <Link to="/" className="flex items-center">
            <tableIcons.dashboard className="mr-2" />
            Dashboard
          </Link>
          {header != "Dashboard" && (
            <span className="hover:text-black">{header}</span>
          )}
          {id && (
            <Link to={dashboardModel[id].link} className="flex items-center">
              {<Icon className="mr-2" />}
              {dashboardModel[id].title} List
            </Link>
          )}
        </Breadcrumbs>
      </div>
      <div>{children}</div>
    </div>
  );
});

export default PageLayout;
