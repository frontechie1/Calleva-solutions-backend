import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginRoutes } from "../../presentation/routes_icons/routes";
import {
  getLoggedInState,
  getUserRole,
} from "../../service/features/authSlice";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const isLoggedIn = useSelector(getLoggedInState);
    const userRole = useSelector(getUserRole);

    if (!isLoggedIn) {
      return <Navigate to={loginRoutes[userRole]} />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
