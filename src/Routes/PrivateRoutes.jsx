import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div>Loading ....</div>
    } 
    if (user) {
        return children
    }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;