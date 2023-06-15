import { NavLink } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";

const Menu = () => {
    const { user } = useAuth();
    const menu = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                    ?
                    "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    :
                    "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
            Home
        </NavLink>
        <NavLink
            to="/instructors"
            className={({ isActive }) =>
                isActive
                    ?
                    "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    :
                    "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
            Instructors
        </NavLink>
        <NavLink
            to="/classPage"
            className={({ isActive }) =>
                isActive
                    ?
                    "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    :
                    "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
            Classes
        </NavLink>
        {
            user ? <>
                <NavLink
                    to="/dashbord/"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
                    Dashboard
                </NavLink>
            </>
                :
                <>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
                        Log In
                    </NavLink>
                    <span className="inline mx-2">or</span>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
                        Register
                    </NavLink>
                </>
        }

    </>
    return menu
};

export default Menu;