import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import useAuth from "../CustomHooks/useAuth";
import PageLoader from "../components/Loader/PageLoader/PageLoader";

const Main = () => {
    const { loading } = useAuth()
    if (loading) {
        return <PageLoader></PageLoader>
    }
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;