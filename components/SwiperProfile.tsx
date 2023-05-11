import React from "react";
import PersonProfile from "./PersonProfile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Mousewheel } from "swiper";
import { Autoplay } from "swiper";
import { Grid } from "swiper";
import "swiper/css";
import person1 from "../img/portraits/person1.jpeg";
import person3 from "../img/portraits/person3.jpeg";
import person4 from "../img/portraits/person4.jpeg";
import person5 from "../img/portraits/person5.jpeg";
import person6 from "../img/portraits/person6.jpeg";
import person7 from "../img/portraits/person7.jpeg";

const SwiperProfile = () => {
  return (
    <div className="w-full pb-28  2xl:pb-36">
      <div className="overflow-hidden px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <Swiper
            modules={[Mousewheel, Navigation, Autoplay, Grid]}
            spaceBetween={32}
            slidesPerView="auto"
            direction="horizontal"
            autoplay
            scrollbar={{ draggable: true }}
          >
            <div className="max-w-[1440px]">
              <div className="max-w-[250px]">
                <SwiperSlide key={1}>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide key={2}>
                  <PersonProfile profilePicture={person7} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide key={3}>
                  <PersonProfile profilePicture={person3} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide key={4}>
                  <PersonProfile profilePicture={person4} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide key={5}>
                  <PersonProfile profilePicture={person5} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide key={6}>
                  <PersonProfile profilePicture={person6} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide key={7}>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperProfile;
