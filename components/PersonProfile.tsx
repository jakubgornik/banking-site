{
  /* <div v-if="profileDefault">
<div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="relative overflow-hidden w-auto h-auto">
    <nuxt-picture
    :class="{activebutton: isHovered}"
    class="relative block transition-all duration-500  after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:to-[#F7F9F9]/20 after:from-[#002738]/40 after:w-full after:h-full after:z-40 after:inset-0 after:absolute"
    :src="'/img/Mark.png'"
    width="282px"
    height="350px"
    />
    <div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="absolute flex bottom-1 left-2 z-40">
        <svg class="absolute -top-1" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20L15.5 -6.77527e-07L21.5 -9.39795e-07L6 20L0 20Z" fill="#39E8EA"/>
        </svg>
        <div class="ml-6 text-[#FFFFFF] uppercase">Mark Sadowsky</div>
    </div>
</div>
<div class="mt-4 font-semibold text-base mx-2">Professor</div>
<div class=" font-normal text-base mx-2">University of Oslo, Norway</div>
<div class="border-b-[1px] my-5"></div>
<div class="max-w-xs text-left mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio numquam accusamus quidem fugiat.</div>
<svg @click="toggleProfile()" @mouseover="isHovered = true" @mouseleave="isHovered = false" 
    :class="[isHovered ? 'text-[#39E8EA]' : 'text-[#002738]']" 
    class="mt-4 w-8 h-8  transition duration-500" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19.5" class="stroke-current"/>
    <rect x="13" y="19" width="14" height="2" class="fill-current"/>
    <rect x="21" y="13" width="14" height="2" transform="rotate(90 21 13)" class="fill-current"/>
</svg>
</div>
<div v-else>
    <div class="py-6 px-2 bg-[#F7F9F9]">
        <svg class="absolute" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M0 20L15.5 -6.77527e-07L21.5 -9.39795e-07L6 20L0 20Z" fill="#39E8EA"/>
        </svg>
        <div class="ml-6 text-xl font-medium">Mark Sadowsky</div>
        <div class="mt-4 font-semibold text-base">Professor</div>
        <div class=" font-normal text-base">University of Oslo, Norway</div>
        <div class="my-5 border-b-[1px]"></div>
        <div class="text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
    <svg @click="toggleProfile()" @mouseover="isHovered = true" @mouseleave="isHovered = false" 
        :class="[isHovered ? 'text-[#39E8EA]' : 'text-[#002738]']" 
        class="mt-4 w-8 h-8  transition duration-500" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19.5" class="stroke-current"/>
        <rect x="13" y="19" width="14" height="2" class="fill-current"/>
    </svg>
</div> */
}
import { useState } from "react";
import React from "react";
import Image from "next/image";
import mark from "../img/Mark.png";

const PersonProfile = () => {
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSvgHover = () => {
    setIsHovered(true);
  };

  const handleSvgUnHover = () => {
    setIsHovered(false);
  };
  const openProfileHandler = () => {
    setIsDescriptionOpened(!isDescriptionOpened);
    setIsHovered(false);
  };
  return (
    <>
      <div className=" max-w-[250px] bg-gradient-to-tr from-[#1D2B41] to-[#002738]">
        <div className="relative">
          {/* img */}
          <div className="z-100 relative block transition-all duration-500  after:pointer-events-none after:absolute after:inset-0 after:z-40 after:h-full after:w-full after:bg-gradient-to-t after:from-[#002738]/40 after:to-[#F7F9F9]/20 after:content-['']">
            <Image src={mark} alt="Person profile" height="500" width="250" />
          </div>
          {/* Header */}
          <div className="absolute bottom-1 left-2 z-40 flex">
            <svg
              className="absolute -top-1"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20L15.5 -6.77527e-07L21.5 -9.39795e-07L6 20L0 20Z"
                fill="#39E8EA"
              />
            </svg>
            <div className="ml-6 uppercase text-white">Joshua Marble</div>
          </div>
        </div>

        <div className="mx-2 mt-4 font-semibold text-white">Director</div>
        <div className=" mx-2 font-normal text-white">
          Bank of Berlin, Germany
        </div>
        <div className="my-5 border-b-[1px] border-black"></div>

        {/* Text */}
        {isDescriptionOpened && (
          <div className="mx-2 max-w-xs text-left text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        )}
        {!isDescriptionOpened && (
          <div className="mx-2 max-w-xs text-left text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            distinctio numquam accusamus quidem fugiat.
          </div>
        )}

        <div className="flex items-center justify-center pb-2">
          {!isDescriptionOpened && (
            <svg
              onClick={openProfileHandler}
              onMouseOver={handleSvgHover}
              onMouseLeave={handleSvgUnHover}
              className={`mt-4 h-8 w-8  transition duration-500 ${
                isHovered ? "text-mint" : "text-[#ffffff]"
              }`}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" className="stroke-current" />
              <rect
                x="13"
                y="19"
                width="14"
                height="2"
                className="fill-current"
              />
              <rect
                x="21"
                y="13"
                width="14"
                height="2"
                transform="rotate(90 21 13)"
                className="fill-current"
              />
            </svg>
          )}

          {isDescriptionOpened && (
            <svg
              onClick={openProfileHandler}
              onMouseOver={handleSvgHover}
              onMouseLeave={handleSvgUnHover}
              className={`mt-4 h-8 w-8  transition duration-500 ${
                isHovered ? "text-mint" : "text-[#ffffff]"
              }`}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" className="stroke-current " />
              <rect
                x="13"
                y="19"
                width="14"
                height="2"
                className="fill-current"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonProfile;
