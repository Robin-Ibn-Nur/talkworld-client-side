import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";

SwiperCore.use([EffectFade, Navigation, Pagination]);


const TopSlider = () => {
    const imagesArray = [
        {
            image: "https://logodix.com/logo/413200.jpg",
            legend: "Unlock new horizons through language learning.",
            message: 'Discover new worlds, cultures, and opportunities by mastering foreign languages.',
        },
        {
            image: "https://i.pinimg.com/originals/4a/2c/7a/4a2c7ad5e19da28877fcac2a4315ac85.jpg",
            legend: "Connect hearts with the power of language.",
            message: ' Bridge gaps, foster understanding, and build strong connections through the gift of language.',
        },
        {
            image: "https://goingivy.com/wp-content/uploads/2020/02/AdobeStock_80034230-scaled.jpeg",
            legend: "Language skills: Your passport to endless possibilities.",
            message: 'Embrace diverse experiences, broaden your perspectives, and unlock limitless potential with language proficiency.',
        },
    ];

    const swiperSettings = {
        spaceBetween: 30,
        effect: 'fade',
        navigation: true,
        pagination: {
            clickable: true,
        },
        modules: [EffectFade, Navigation, Pagination],
        className: 'mySwiper my-5',
    };

    return (
        <Swiper {...swiperSettings}>
            {imagesArray.map((image, index) => (
                <SwiperSlide key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${image.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '500px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <div
                            className="text-center font-extrabold bg-slate-100 bg-opacity-30 text-gray-900 p-5 rounded opacity-100">
                            <h1 className="text-3xl ">{image.legend}</h1>
                            <p>{image.message}</p>
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopSlider;