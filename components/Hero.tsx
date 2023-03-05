import Image from "next/image";
import team from "../img/team.png";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex pt-[12rem] mobile:flex-col mobile:items-center mobile:space-x-0 md:flex-row md:justify-center md:space-x-5 lg:space-x-6">
        <div className="flex flex-col">
          <h1 className=" min-w-[16rem] max-w-[29rem] px-4 leading-[1.1]  tracking-wide text-white  mobile:text-center mobile:text-[2.5rem] mobile-lg:text-left lg:text-6xl">
            The Next{" "}
            <span className="bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text font-extrabold text-transparent">
              Generation
            </span>{" "}
            Banking.
          </h1>
          <p className="max-w-sm px-4 pt-8 text-3xl text-[#FFFFFF] mobile:text-justify mobile:text-base sm:text-left sm:text-lg">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <div className="relative ml-3 mt-4 flex h-10 w-60 items-center justify-center rounded-full border-2 border-slate-900 bg-mint bg-transparent bg-opacity-30  text-white">
            <p className="text-md tracking-wide">
              Our experts awaits your call
            </p>
            <span className="absolute top-[-3px] -right-1 flex h-4 w-4">
              <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75"></span>
              <span className="absolute  inline-flex h-4 w-4 rounded-full bg-mint"></span>
            </span>
          </div>
        </div>
        <Image
          className="px-4 mobile:pt-8 md:pt-0"
          src={team}
          alt="Team of employees"
          width={450}
          height={450}
        />
      </div>
    </>
  );
};

export default Hero;
