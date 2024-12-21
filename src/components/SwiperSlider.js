"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ganga_ghat_4 from "../../public/images/ganga_ghat_4.jpeg"
import ganga_ghat_5 from "../../public/images/ganga_ghat_5.jpeg"

const SwiperSlider = () => {
    const images = [ganga_ghat_4, ganga_ghat_5, ganga_ghat_4, ganga_ghat_5]

return (
    <Swiper
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }}
        modules={[Navigation, Pagination, Autoplay]}
        style={{
            height: "60%",
            width: "70%",
            borderRadius: "8px",
            overflow: "hidden",
        }}
    >
        {images.map((src, index) => (
            <SwiperSlide key={index}>
                <img
                    src={src.src}
                    alt={`Slide ${index + 1}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </SwiperSlide>
        ))}
    </Swiper>
);
};

export default SwiperSlider;