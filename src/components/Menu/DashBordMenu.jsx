import { Link, NavLink } from "react-router-dom";
import useInstructor from "../../CustomHooks/useInstructor";
import useAdmin from "../../CustomHooks/useAdmin";


const DashBordMenu = () => {
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()

    const dashbordMenu = <>
        {!isAdmin && !isInstructor && <>
            <NavLink to="/dashbord/mySelectedClass"
                className={({ isActive }) =>
                    isActive
                        ?
                        "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        :
                        "hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                }>My Selected Class</NavLink>
            <NavLink
                to="/dashbord/myEnrolledClass"
                className={({ isActive }) =>
                    isActive
                        ?
                        "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        :
                        "hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                }>My Enrolled Class</NavLink>
        </>}
        {
            isInstructor && <>
                <NavLink
                    to="/dashbord/addClass"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                    }>Add a Class</NavLink>
                <NavLink
                    to="/dashbord/myClasses"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                    }>My Classes</NavLink>
            </>
        }
        {
            isAdmin && <>
                <NavLink
                    to="/dashbord/manageClasses"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                    }>Manage Classes</NavLink>
                <NavLink
                    to="/dashbord/manageUsers"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium"

                    }>Manage Users</NavLink>
            </>
        }
        <Link to="/" className="hover:bg-[#FF6600] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Go Back to Home</Link>
    </>
    return dashbordMenu
};

export default DashBordMenu;