import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  img: StaticImageData;
  description: string;
  title: string;
}

const BoxItem = ({ img, description, title }: Props) => {
  return (
    <div className="mb-3 flex  items-center gap-6 rounded-lg border-2 border-[#1D2B41] px-4 py-6 transition-all duration-1000 hover:bg-mint hover:bg-opacity-60">
      <div className="flex h-10 w-10  shrink-0 items-center justify-center rounded-full bg-gray-800 ">
        <Image src={img} alt="supporting icon" width={20} height={20} />
      </div>
      <div className="flex flex-col ">
        <h3 className="bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text text-left  text-xl font-bold  text-transparent">
          {title}
        </h3>
        <p className="max-w-2xl text-white">{description}</p>
      </div>
    </div>
  );
};

export default BoxItem;
