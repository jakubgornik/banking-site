import Image from "next/image";
import team from "../img/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="w-full">
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-10 py-40 lg:px-16 xl:px-20 "
      >
        <div className=" mx-auto flex max-w-[1440px] mobile:flex-col mobile:items-center mobile:space-x-0 md:flex-row md:justify-center md:space-x-5 lg:space-x-6 xl:justify-between">
          <div className="flex flex-col">
            <h1 className=" max-w-[30rem]  leading-[1.1] tracking-wide  text-white mobile:text-center  mobile:text-[2.5rem] mobile-lg:text-left lg:max-w-[31rem] lg:text-6xl">
              The Next{" "}
              <span className="bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text font-extrabold text-transparent">
                Generation
              </span>{" "}
              Banking
            </h1>
            <p className="max-w-sm  pt-8 text-3xl text-[#FFFFFF] mobile:text-justify mobile:text-base sm:text-left sm:text-lg">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div className="relative  mt-4 flex h-10 w-60 items-center justify-center rounded-lg border-2 border-slate-900 bg-mint bg-transparent bg-opacity-30  text-white">
              <p className="text-md tracking-wide">
                Our experts await your call
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
            width={560}
            sizes="(min-width: 768px) 400px"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
