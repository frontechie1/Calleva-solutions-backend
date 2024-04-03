
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { tableIcons } from "../../presentation/routes_icons/iconsHolder";

import {
  selectNavState,
  setNavigationState,
} from "../../service/features/navigation_slice";

function NavBarComponent() {
  const dispatch = useDispatch();
  const openNav = useSelector(selectNavState);
  // const [open, setOpenNav] = useState(openNav);

  const handleNavigation = () => {
    // setOpenNav((state) => !state);
    dispatch(setNavigationState(!openNav));
  };
  return (
    <div className="flex-row  shadow-none pl-0 pr-5 py-0 flex w-full  items-baseline lg:items-center justify-between !bg-white rounded-none lg:h-[5rem] ">
      <div
        className="h-[5rem] flex items-center justify-center transition duration-200 bg-transparent hover:bg-primry px-5 hover:bg-primary"
        onClick={handleNavigation}
      >
        <tableIcons.bars className="text-black text-[2rem]" />
      </div>

      <div className="pb-20">
        <img src={logo} alt="" className="w-24 lg:hidden" />
      </div>

      <div className="text-[1.4rem] flex items-center text-primary h-ful mr-4">
        <Link
          to="/"
          className="hidden lg:flex items-center justify-center px-5 hover:bg-slate h-[5rem]"
        >
          Callevasolutions
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center lg:px-5 lg:hover:bg-slate lg:h-[5rem]"
        >
          <tableIcons.logout className="mr-2" /> logout
        </Link>
      </div>
    </div>
  );
}

export default NavBarComponent;
