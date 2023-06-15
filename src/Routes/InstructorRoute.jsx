import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import useInstructor from "../CustomHooks/useInstructor";
import PrivateRouteLoader from "../components/Loader/PrivateRouteLoader/PrivateRouteLoader";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <PrivateRouteLoader></PrivateRouteLoader>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;