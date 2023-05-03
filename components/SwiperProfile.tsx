import React from "react";
import PersonProfile from "./PersonProfile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Mousewheel } from "swiper";
import { Autoplay } from "swiper";
import { Grid } from "swiper";

import "swiper/css";
import person1 from "../img/person1.png";
// import person2 from "../img/Mark.png";
// import person3 from "../img/person2.png";
// import person4 from "../img/person3.png";
// import person5 from "../img/person4.png";
// import person6 from "../img/person5.png";
// import person7 from "../img/person6.png";
// import "swiper/css/scrollbar";

const SwiperProfile = () => {
  return (
    <div className="w-full py-20">
      <div className="overflow-hidden px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <Swiper
            modules={[Mousewheel, Navigation, Autoplay, Grid]}
            spaceBetween={32}
            slidesPerView="auto"
            direction="horizontal"
            scrollbar={{ draggable: true }}
          >
            <div className="max-w-[1440px]">
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile profilePicture={person1} />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
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
