import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import slide1 from "../../assets/images/gameinfo/slide-1.png";
import slide2 from "../../assets/images/gameinfo/slide-2.png";
import slide3 from "../../assets/images/gameinfo/slide-3.png";
import slide4 from "../../assets/images/gameinfo/slide-4.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={31}
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: {
              spaceBetween: 11,
            },
            720: {
              spaceBetween: 21,
            },
            993: {
              spaceBetween: 42,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/7367247/pexels-photo-7367247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
