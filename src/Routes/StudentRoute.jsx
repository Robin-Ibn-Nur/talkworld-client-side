import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";
import PrivateRouteLoader from "../components/Loader/PrivateRouteLoader/PrivateRouteLoader";
import useStudent from "../CustomHooks/useStudent";



const StudentRoute = ({children}) => {
    const { user, loading } = useAuth()
    const [isStudent, isStudentLoading]= useStudent()
    const location = useLocation()
    if (loading && isStudentLoading) {
        return <PrivateRouteLoader></PrivateRouteLoader>
    }
    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;