import { Link, NavLink } from "react-router-dom";
import useInstructor from "../../CustomHooks/useInstructor";
import useAdmin from "../../CustomHooks/useAdmin";
import useStudent from "../../CustomHooks/useStudent";
import { AiOutlineCheckCircle, AiOutlineFolderAdd, AiOutlineFolderOpen, AiOutlineHome, AiOutlineSelect, AiOutlineWallet } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";



const DashBordMenu = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    
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

                        }>
                        
                        <p className="flex items-center gap-2"><AiOutlineSelect></AiOutlineSelect> My Selected Class</p>
                    </NavLink>
                    <NavLink
                        to="/dashbord/myEnrolledClass"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }> <p className="flex items-center gap-2"><AiOutlineCheckCircle></AiOutlineCheckCircle>My Enrolled Class</p>
                    </NavLink>
                    <NavLink
                        to="/dashbord/payMentHistory"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }> <p className="flex items-center gap-2"><AiOutlineWallet></AiOutlineWallet>Payment History</p>
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

                        }>
                        <p className="flex items-center gap-2"><AiOutlineFolderAdd></AiOutlineFolderAdd>Add a Class</p>
                        </NavLink>
                    <NavLink
                        to="/dashbord/myClasses"
                        className={({ isActive }) =>
                            isActive
                                ?
                                "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                                :
                                "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                        }>
                        <p className="flex items-center gap-2"><SiGoogleclassroom></SiGoogleclassroom>My Classes</p>
                    
                    </NavLink>
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

                    }>
                    <p className="flex items-center gap-2"> <AiOutlineFolderOpen></AiOutlineFolderOpen>Manage Classes</p>
                </NavLink>
                <NavLink
                    to="/dashbord/manageUsers"
                    className={({ isActive }) =>
                        isActive
                            ?
                            "bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                            :
                            "hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"

                    }>
                    <p className="flex items-center gap-2"><MdOutlineManageAccounts></MdOutlineManageAccounts>Manage Users</p>
                </NavLink>
            </>}
            <hr className="mt-5" />
            <Link to="/" className="hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"> <p className="flex items-center gap-2"> <AiOutlineHome></AiOutlineHome>Go Back to Home</p></Link>
        </div>
    return dashbordMenu
};

export default DashBordMenu;