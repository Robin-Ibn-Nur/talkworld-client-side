import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import PrivateRouteLoader from "../components/Loader/PrivateRouteLoader/PrivateRouteLoader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <PrivateRouteLoader></PrivateRouteLoader>
    } 
    if (user) {
        return children
    }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;