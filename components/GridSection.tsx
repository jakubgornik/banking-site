import GridItem from "./GridItem";
import gridPicture1 from "../img/grid/gridImg1.png";
import gridPicture2 from "../img/grid/gridImg2.png";
import gridPicture3 from "../img/grid/gridImg3.png";
import gridPicture4 from "../img/grid/gridImg4.png";
import gridPicture5 from "../img/grid/gridImg5.png";
import gridPicture6 from "../img/grid/gridImg6.png";
import {
  gridHeader1,
  gridHeader2,
  gridHeader3,
  gridHeader4,
  gridHeader5,
  gridHeader6,
  gridLorem,
} from "@/utilities/util";

const GridSection = () => {
  return (
    <div className="w-full pb-28 ">
      <div className="px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div>
            <h2 className=" max-w-[30rem]  pb-10 text-4xl leading-[1.1] tracking-wide text-white mobile:text-center mobile-lg:text-left ">
              What distinguish
              <span className="bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text font-extrabold text-transparent">
                {" "}
                Easybank
              </span>
            </h2>
          </div>
          <div className=" flex flex-wrap justify-center gap-2">
            <GridItem
              gridPicture={gridPicture1}
              header={gridHeader1}
              description={gridLorem}
            />
            <GridItem
              gridPicture={gridPicture2}
              header={gridHeader5}
              description={gridLorem}
            />
            <GridItem
              gridPicture={gridPicture3}
              header={gridHeader6}
              description={gridLorem}
            />
            <GridItem
              gridPicture={gridPicture4}
              header={gridHeader4}
              description={gridLorem}
            />
            <GridItem
              gridPicture={gridPicture5}
              header={gridHeader2}
              description={gridLorem}
            />
            <GridItem
              gridPicture={gridPicture6}
              header={gridHeader3}
              description={gridLorem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
