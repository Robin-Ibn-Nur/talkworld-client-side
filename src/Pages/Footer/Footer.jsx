import Menu from "../../components/Menu/Menu";

const Footer = () => {
    return (
        <footer className="bg-[#008080]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-8 flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-auto">
                        <h1 className="text-white text-xl font-serif">TalkWorld</h1>
                    </div>
                    <div className="w-full sm:w-auto sm:ml-auto mt-4 sm:mt-0">
                        <ul className="flex space-x-4 text-white">
                            <Menu></Menu>
                            {/* <li>
                                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 py-4 flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-auto">
                        <p className="text-gray-300 text-sm">© {new Date().getFullYear()} TalkWorld. All rights reserved.</p>
                    </div>
                    <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;