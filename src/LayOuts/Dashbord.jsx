import { Link, Outlet } from "react-router-dom";
import DashBordMenu from "../components/Menu/DashBordMenu";
import useAuth from "../CustomHooks/useAuth";
import PageLoader from "../components/Loader/PageLoader/PageLoader";
import useAdmin from "../CustomHooks/useAdmin";
import useInstructor from "../CustomHooks/useInstructor";
import useStudent from "../CustomHooks/useStudent";
import { useEffect, useState } from "react";

const Dashbord = () => {
    const { user, loading } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent()

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading || showLoader) {
        return (
            <PageLoader></PageLoader>
        );
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-outline mb-5  drawer-button lg:hidden">Open Menu</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#008080]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#008080] text-base-content">
                    {/* Sidebar content here */}
                    <Link to="/" className="text-2xl font-bold w-[55px] rounded-full p-5 text-center my-5 text-white border">
                        <span className="text-5xl mr-1">T</span>
                        <span>a</span>
                        <span>l</span>
                        <span>k</span>
                        <span className="text-5xl">W</span>
                        <span>o</span>
                        <span>r</span>
                        <span>l</span>
                        <span>d</span>
                    </Link>
                    <hr />
                    <h3 className="font-bold texl-xl">Welcome {user?.displayName}</h3>
                    {
                        isAdmin && <p className="font-semibold">Status: Admin</p>
                        || isInstructor && <p className="font-semibold">Status: Instructor</p>
                        || isStudent &&
                        <p className="font-semibold">Status: Student</p>
                    }
                    <br />
                    <DashBordMenu></DashBordMenu>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;