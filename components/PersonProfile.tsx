import { useState } from "react";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  profilePicture: StaticImageData;
  fullName: string;
  status: string;
  title: string;
}

const PersonProfile = ({ profilePicture, fullName, status, title }: Props) => {
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
      <div className="max-w-[250px] bg-gradient-to-tr from-slate-900 to-[#002738]">
        <div className="relative" style={{ height: "100%", width: "100%" }}>
          <div className="z-100 relative block transition-all duration-500  after:pointer-events-none after:absolute after:inset-0 after:z-40 after:bg-gradient-to-t after:from-[#002738]/40 after:to-[#1D2B41]/20 after:content-['']">
            <Image
              src={profilePicture}
              alt="Person profile"
              style={{ height: "340px", width: "250px", objectFit: "fill" }}
            />
          </div>

          <div className="absolute bottom-1 left-3 z-40 flex">
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
            <div className="ml-6 uppercase text-white">{fullName}</div>
          </div>
        </div>

        <div className="mx-4 mt-4 font-semibold text-white">{title}</div>
        <div className=" mx-4 font-normal text-white">{status}</div>
        <div className="my-5 border-b-[1px] border-black"></div>

        {isDescriptionOpened && (
          <div className="mx-4 max-w-xs text-left text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        )}
        {!isDescriptionOpened && (
          <div className="mx-4 max-w-xs text-left text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            distinctio numquam accusamus quidem fugiat.
          </div>
        )}

        <div className="flex items-center justify-center pb-6">
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
