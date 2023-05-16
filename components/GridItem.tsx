import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  gridPicture: StaticImageData;
  header: string;
  description: string;
}

const GridItem = ({ gridPicture, header, description }: Props) => {
  return (
    <div className="card h-[300px] w-[300px] flex-grow cursor-pointer rounded-md border-2 border-[#1D2B41] py-2 transition duration-500  hover:bg-mint hover:bg-opacity-30 mobile-lg:h-[340px] md:basis-1/4">
      <div className="flex flex-col">
        <Image src={gridPicture} alt="Grid picture" width={470} />
        <div className="flex flex-col px-6 ">
          <span className="bg-gradient-to-bl from-mint to-[#1D2B41] bg-clip-text pb-1 text-lg font-extrabold text-transparent">
            {header}
          </span>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
