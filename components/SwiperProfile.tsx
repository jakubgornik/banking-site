import React from "react";
import PersonProfile from "./PersonProfile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Mousewheel } from "swiper";
import { Autoplay } from "swiper";
import { Grid } from "swiper";

import "swiper/css";
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
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
              <div className="max-w-[250px]">
                <SwiperSlide>
                  <PersonProfile />
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
          ;
          {/* <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper> */}
          {/* <div className="swiper relative h-full">
            <div className="swiper-wrapper mb-12 flex h-full">
              <div className="swiper-slide mx-4 w-1/6 min-w-[250px] max-w-[280px]">
                <PersonProfile />
              </div>
              <div className="swiper-slide mx-4 w-1/6 min-w-[250px] max-w-[280px]">
                <PersonProfile />
              </div>
              <div className="swiper-slide mx-4 w-1/6 min-w-[250px] max-w-[280px]">
                <PersonProfile />
              </div>
              <div className="swiper-slide mx-4 w-1/6 min-w-[250px] max-w-[280px]">
                <PersonProfile />
              </div>
              <div className="swiper-slide mx-4 w-1/6 min-w-[250px] max-w-[280px]">
                <PersonProfile />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SwiperProfile;

// export default{
//     data() {
//         return {
//             isHovered: false,
//             profileDefault: true,
//             swiperOptionsObject: {
//                 modules: [Pagination, Mousewheel, Navigation, Autoplay, Grid],
//                 spaceBetween: 16,
//                 direction: "horizontal",
//                 pagination: {
//                     el: ".swiper-pagination",
//                     type: "progressbar",
//                 },
//                 navigation: {
//                     nextEl: ".swiper-button-next",
//                     prevEl: ".swiper-button-prev",
//                 },
//                 slidesPerView: "auto",
//             },
//         };
//     },
//     mounted() {
//         this.$data.swiper = new Swiper(".swiper", this.swiperOptionsObject);
//     },
//     methods: {
//         toggleProfile() {
//             this.profileDefault = !this.profileDefault;
//         }
//     },
//     components: { SpeakerProfile }
// }

// </script>
