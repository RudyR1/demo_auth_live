import { useContext } from "react";
import UserExport from "../contexts/UserContext";
import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {

  const {user} = useContext(UserExport.UserContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;