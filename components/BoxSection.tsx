import BoxItem from "./BoxItem";
import starImg from "../img/star.png";
import shieldImg from "../img/shield.png";
import transferImg from "../img/transfer.png";
import {
  d1 as description,
  t1 as title1,
  t2 as title2,
  t3 as title3,
} from "../utilities/util";

interface Props {
  title: string;
  titleDescription: string;
}

const BoxSection = ({ title, titleDescription }: Props) => {
  return (
    <div className="w-full">
      <div className="px-10 lg:px-16 xl:px-20">
        <div className=" mx-auto flex max-w-[1440px] justify-center mobile:flex-col mobile:space-y-8 mobile:space-x-0 mobile:pt-16 md:flex-row md:space-y-0 md:space-x-8 md:pt-32 xl:justify-between ">
          <div className="flex flex-col mobile:pb-8 md:pb-0">
            <h2 className=" max-w-[22rem]  pb-6 text-4xl leading-[1.1] tracking-wide text-white mobile:text-center mobile-lg:text-left ">
              {title}
            </h2>
            <p className="text-md  text-white mobile:max-w-sm mobile:text-justify mobile:text-base md:max-w-[18rem]">
              {titleDescription}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <BoxItem description={description} title={title1} img={starImg} />
            <BoxItem description={description} title={title2} img={shieldImg} />
            <BoxItem
              description={description}
              title={title3}
              img={transferImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
