import { useEffect, useState } from "react";
import useAuth from "../../../CustomHooks/useAuth";
import ContactInfo from "../ContactInfo/ContactInfo";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import PopulerInstructor from "../PopulerInstructor/PopulerInstructor";
import RelevantSection from "../RelevantSection/RelevantSection";
import TopSlider from "../TopSlider/TopSlider";


const Home = () => {
    const { loading } = useAuth()
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading || showLoader) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <TopSlider></TopSlider>
            <PopulerClasses></PopulerClasses>
            <PopulerInstructor></PopulerInstructor>
            <RelevantSection></RelevantSection>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;