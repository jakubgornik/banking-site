import BoxItem from "./BoxItem";
import starImg from "../img/icons/star.png";
import shieldImg from "../img/icons/shield.png";
import transferImg from "../img/icons/transfer.png";
import {
  boxItemDescription,
  boxSectionDescription,
  boxItemTitle1,
  boxItemTitle2,
  boxItemTitle3,
} from "../utilities/util";
import { motion } from "framer-motion";

const BoxSection = () => {
  return (
    <div className="w-full">
      <div className="px-10 pb-28 lg:px-16 xl:px-20  ">
        <div className=" mx-auto flex max-w-[1440px] justify-center mobile:flex-col mobile:space-y-8 mobile:space-x-0  md:flex-row md:space-y-0 md:space-x-16  xl:justify-between ">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col mobile:pb-8 md:pb-0"
          >
            <h2 className=" max-w-[30rem]  pb-6 text-4xl leading-[1.1] tracking-wide text-white mobile:text-center mobile-lg:text-left ">
              You do the
              <span className="bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text font-extrabold text-transparent">
                {" "}
                Business
              </span>
              , we will handle the
              <span className="bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text font-extrabold text-transparent">
                {" "}
                Money
              </span>
            </h2>
            <p className="text-md  text-white mobile:max-w-sm mobile:text-justify mobile:text-base md:max-w-[20rem]">
              {boxSectionDescription}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center "
          >
            <BoxItem
              description={boxItemDescription}
              title={boxItemTitle1}
              img={starImg}
            />
            <BoxItem
              description={boxItemDescription}
              title={boxItemTitle2}
              img={shieldImg}
            />
            <BoxItem
              description={boxItemDescription}
              title={boxItemTitle3}
              img={transferImg}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
