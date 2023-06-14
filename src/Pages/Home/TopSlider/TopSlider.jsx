import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const TopSlider = () => {
    const imagesArray = [
        {
            image: "https://logodix.com/logo/413200.jpg",
            legend: "Image 1",
        },
        {
            image: "https://hafha.com/wp-content/uploads/2016/07/bigstock-127559561.jpg",
            legend: "Image 2",
        },
        {
            image: "https://goingivy.com/wp-content/uploads/2020/02/AdobeStock_80034230-scaled.jpeg",
            legend: "Image 3",
        },
        {
            image: "https://www.robertsonlanguages.com/wp-content/uploads/2019/05/4.png",
            legend: "Image 4",
        },
    ];
    return (
        <Carousel autoPlay dynamicHeight showArrows={true} >
            {
                imagesArray.map((x, i) => <div
                    key={i}>
                    <img src={x?.image} className="container mx-auto" alt="" />
                    <p className="legend">{x?.legend}</p>
                </div>)
            }
        </Carousel>
    );
};

export default TopSlider;