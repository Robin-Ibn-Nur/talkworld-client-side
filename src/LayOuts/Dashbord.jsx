import { Outlet } from "react-router-dom";
import DashBordMenu from "../components/Menu/DashBordMenu";

const Dashbord = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open SideBar</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#008080]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#008080] text-base-content">
                    {/* Sidebar content here */}
                    <DashBordMenu></DashBordMenu>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;