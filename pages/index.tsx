import Navbar from "@/components/Navbar";
import Image from "next/image";
import team from "../img/team.png";

const Home = () => {
  return (
    <>
      <div className="bg-[radial-gradient(120%_190%_at_90%_15%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Navbar />
        {/* <div className="container relative mx-auto flex h-screen items-center justify-center ">
          <div className="relative z-10 h-1/2 w-1/5 rounded-lg border-2 border-white border-opacity-5 bg-white bg-opacity-5 shadow-2xl"></div>
          <Image
            className="absolute"
            src={team}
            alt="Team of employees"
            width={500}
            height={500}
          ></Image>
        </div> */}
        <div className="h-[5000px]"></div>
      </div>
    </>
  );
};

export default Home;
