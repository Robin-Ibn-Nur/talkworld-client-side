import { Link, NavLink } from "react-router-dom";
import useInstructor from "../../CustomHooks/useInstructor";
import useAdmin from "../../CustomHooks/useAdmin";
import useStudent from "../../CustomHooks/useStudent";


const DashBordMenu = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    console.log(isStudent, isAdmin);

    const dashbordMenu =
        <div className="flex flex-col font-serif texl-2xl">

            {
                isStudent && <>
                    <NavLink to="/dashbord/mySelectedClass"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }>My Selected Class
                    </NavLink>
                    <NavLink
                        to="/dashbord/myEnrolledClass"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }>My Enrolled Class
                    </NavLink>
                    <NavLink
                        to="/dashbord/payMentHistory"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }>Payment History
                    </NavLink>
                </>
            }

            {
                isInstructor && <>
                    <NavLink
                        to="/dashbord/addClass"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }>Add a Class</NavLink>
                    <NavLink
                        to="/dashbord/myClasses"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }>My Classes</NavLink>
                </>
            }
            {isAdmin && <>
                <NavLink
                    to="/dashbord/manageClasses"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                    }>Manage Classes</NavLink>
                <NavLink
                    to="/dashbord/manageUsers"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                    }>Manage Users</NavLink>
            </>}
            <hr className="mt-5" />
            <Link to="/" className="hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Go Back to Home</Link>
        </div>
    return dashbordMenu
};

export default DashBordMenu;