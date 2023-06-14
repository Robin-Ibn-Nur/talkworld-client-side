import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";

SwiperCore.use([EffectFade, Navigation, Pagination]);

const imagesArray = [
    {
        image: "https://logodix.com/logo/413200.jpg",
        legend: "Image 1",
    },
    {
        image: "https://i.pinimg.com/originals/4a/2c/7a/4a2c7ad5e19da28877fcac2a4315ac85.jpg",
        legend: "Image 2",
    },
    {
        image: "https://goingivy.com/wp-content/uploads/2020/02/AdobeStock_80034230-scaled.jpeg",
        legend: "Image 3",
    }

];

const TopSlider = () => {

    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper my-5"
        >
            {imagesArray.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.image} alt={image.legend} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopSlider;