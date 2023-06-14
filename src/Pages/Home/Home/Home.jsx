import ContactInfo from "../ContactInfo/ContactInfo";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import PopulerInstructor from "../PopulerInstructor/PopulerInstructor";
import RelevantSection from "../RelevantSection/RelevantSection";
import TopSlider from "../TopSlider/TopSlider";


const Home = () => {
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