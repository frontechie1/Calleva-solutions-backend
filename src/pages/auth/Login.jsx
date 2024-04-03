import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { tableIcons } from "../../presentation/routes_icons/iconsHolder";
import ClipLoader from "react-spinners/ClipLoader";

import {
  getLoggedInState,
  setUserRole,
  validateUser,
  getLoggedInStatus
} from "../../service/features/authSlice";
import { statusObj } from "../../service/features/customer/customerSlice";

// eslint-disable-next-line react/prop-types
const LoginDisplay = ({ userRole }) => {
  const role = userRole;
  const ref = useRef();
  const dispatch = useDispatch();
  const siteKey = import.meta.env.VITE_RACAPTCHA_SITE_KEY;
  const status = useSelector(getLoggedInStatus);
  //   const secrete = import.meta.env.VITE_RACAPTCHA_SECRETE_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("userRole", role);
    const data = Object.fromEntries(formData);
    dispatch(validateUser(data));
  };

  useEffect(() => {
    dispatch(setUserRole(role));
  }, [dispatch, role]);

  return (
    <div className="flex items-start justify-center mt-20 w-screen min-h-screen">
      <div className="w-[30rem] md:w-[35rem] flex flex-col items-center justify-start">
        <div className="bg-white w-full flex items-center justify-center p-5 shadow-lg">
          <img src={logo} alt="" className="w-7/12" />
        </div>
        <div className="w-full bg-white mt-10 flex items-center justify-start flex-col px-5 py-10 shadow-lg">
          <p className="text-black text-[1.4rem] ">
            Sign in to start your session
          </p>
          <form
            method="POST"
            className="w-full mt-10 flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center w-full border border-slate p-2">
              <input
                type="email"
                name="email"
                required={true}
                placeholder="email"
                className="flex-1 border-none outline-none focus:outline-none text-[1.4rem] text-black"
              />
              <tableIcons.person className="text-[1.5rem]" />
            </div>
            <div className="flex items-center w-full border border-slate p-2 mt-7 mb-5">
              <input
                name="password"
                type="password"
                required={true}
                placeholder="password"
                className="flex-1 border-none outline-none focus:outline-none text-[1.4rem] text-black"
              />
              <tableIcons.locked className="text-[1.5rem]" />
            </div>
            <ReCAPTCHA sitekey={siteKey} ref={ref} className="w-full" />
            <div className="flex justify-between w-full mt-7">
              <label
                htmlFor="remember me"
                className="text-[1.4rem] flex items-center justify-start"
              >
                <input type="checkbox" name="remember" id="" />
                <span className="ml-2">Remember me</span>
              </label>
              <button
                type="submit"
                className="bg-primary text-[1.4rem] py-3 px-5"
              >
                {status == statusObj.pending && <ClipLoader size={10} />}
                Sign in
              </button>
            </div>
            <Link
              to="/admins/forgot-password"
              className="text-primary self-start"
            >
              I forgot my password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const Login = ({ userRole }) => {
  const isLoggedIn = useSelector(getLoggedInState);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <LoginDisplay userRole={userRole} />;
};

export default Login;
