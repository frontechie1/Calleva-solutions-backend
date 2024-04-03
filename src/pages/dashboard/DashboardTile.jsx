/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { tableIcons } from "../../presentation/routes_icons/iconsHolder";

function DashboardTile({ title = "title", Icon, path = "/", colors }) {
  return (
    <Card
      className={`relative w-full grid grid-row-[4fr_1fr] h-[15rem] my-5 pb-0 group ${colors.bg} rounded-none`}
    >
      <Icon
        className={`text-[10rem] bg-inherit ${colors.icon} !bg-clip-text absolute right-2 top-4 z-10 group-hover:scale-110 transition-transform duration-200 `}
      />
      <CardBody className="z-20 col-span-5 ">
        <div className=" w-full">
          <span className="text-[4rem] text-white">22</span>
          <h2 className="text-white font-bold text-[1.2rem]">{title}</h2>
        </div>
      </CardBody>
      <Link
        className={`${colors.link} opacity-80 hover:opacity-100 w-full col-span-6 flex items-center justify-center text-white`}
        to={path}
      >
        <Typography className="mx-3 group-hover/link:scale-105 transition-transform duration-100">
          More info
        </Typography>
        <tableIcons.forward className="text-primary" />
      </Link>
    </Card>
  );
}

export default DashboardTile;
