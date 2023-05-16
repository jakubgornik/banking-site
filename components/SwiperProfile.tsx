import React from "react";
import PersonProfile from "./PersonProfile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Mousewheel } from "swiper";
import { Autoplay } from "swiper";
import { Grid } from "swiper";
import "swiper/css";
import {
  personProfileFullName1,
  personProfileFullName2,
  personProfileFullName3,
  personProfileFullName4,
  personProfileFullName5,
  personProfileFullName6,
  personProfileStatus1,
  personProfileStatus2,
  personProfileStatus3,
  personProfileStatus4,
  personProfileStatus5,
  personProfileStatus6,
  personProfileOcupation1,
  personProfileOcupation2,
  personProfileOcupation3,
  personProfileOcupation4,
  personProfileOcupation5,
  personProfileOcupation6,
} from "../utilities/util";
import person1 from "../img/portraits/person1.jpeg";
import person3 from "../img/portraits/person3.jpeg";
import person4 from "../img/portraits/person4.jpeg";
import person5 from "../img/portraits/person5.jpeg";
import person6 from "../img/portraits/person6.jpeg";
import person7 from "../img/portraits/person7.jpeg";

const SwiperProfile = () => {
  return (
    <div>
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
                    <PersonProfile
                      profilePicture={person1}
                      status={personProfileStatus1}
                      fullName={personProfileFullName1}
                      title={personProfileOcupation1}
                    />
                  </SwiperSlide>
                </div>
                <div className="max-w-[250px]">
                  <SwiperSlide key={2}>
                    <PersonProfile
                      profilePicture={person7}
                      status={personProfileStatus2}
                      fullName={personProfileFullName2}
                      title={personProfileOcupation2}
                    />
                  </SwiperSlide>
                </div>
                <div className="max-w-[250px]">
                  <SwiperSlide key={3}>
                    <PersonProfile
                      profilePicture={person3}
                      status={personProfileStatus3}
                      fullName={personProfileFullName3}
                      title={personProfileOcupation3}
                    />
                  </SwiperSlide>
                </div>
                <div className="max-w-[250px]">
                  <SwiperSlide key={4}>
                    <PersonProfile
                      profilePicture={person4}
                      status={personProfileStatus4}
                      fullName={personProfileFullName4}
                      title={personProfileOcupation4}
                    />
                  </SwiperSlide>
                </div>
                <div className="max-w-[250px]">
                  <SwiperSlide key={5}>
                    <PersonProfile
                      profilePicture={person5}
                      status={personProfileStatus5}
                      fullName={personProfileFullName5}
                      title={personProfileOcupation5}
                    />
                  </SwiperSlide>
                </div>
                <div className="max-w-[250px]">
                  <SwiperSlide key={6}>
                    <PersonProfile
                      profilePicture={person6}
                      status={personProfileStatus6}
                      fullName={personProfileFullName6}
                      title={personProfileOcupation6}
                    />
                  </SwiperSlide>
                </div>
                <div className="max-w-[250px]">
                  <SwiperSlide key={7}>
                    <PersonProfile
                      profilePicture={person1}
                      status={personProfileStatus1}
                      fullName={personProfileFullName1}
                      title={personProfileOcupation1}
                    />
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperProfile;
