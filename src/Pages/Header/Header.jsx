import Menu from "../../components/Menu/Menu";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import ReUsableButton from "../../components/ReUsableButton/ReUsableButton";
import useAuth from "../../CustomHooks/useAuth";
import { Link } from "react-router-dom";


const Header = () => {
    const { user } = useAuth()
   

    return (
        <div className="z-[999] bg-[#008080] text-white top-fixed">
            <div className="border-b border-gray-700 py-4 flex justify-between">
                {/* <p className="ml-4 text-xl font-serif ">TalkWorld</p> */}
                <Link to="/" className=" font-bold my-2 ml-1 text-white">
                    <span className="text-3xl  rounded-full p-5 border">T</span>
                    <span>a</span>
                    <span>l</span>
                    <span>k</span>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>l</span>
                    <span>d</span>
                </Link>
                <div className="text-2xl mr-5 flex flex-col w-50 lg:flex-row font-mono">
                    <span className="mr-5 flex">
                        <AiOutlineMail/>
                        <span className="text-sm ml-2">saifsammy653@gmail.com</span>
                    </span>
                    <span className="flex">
                        <AiOutlinePhone />
                        <span className="text-sm ml-2" >+8801688888888</span>
                    </span>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="z-[999] menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#008080] rounded-box w-52">
                            <Menu></Menu>
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {/* {menu} */}
                            <Menu></Menu>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user && <>
                            <ReUsableButton text="Log Out"></ReUsableButton>
                            <div className="dropdown dropdown-end mx-5">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="photo" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-black bg-[#008080] hover:bg-gray-700 hover:text-white rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;