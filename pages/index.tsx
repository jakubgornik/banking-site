import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import BoxSection from "@/components/BoxSection";
import { d2 as titleDescription, t4 as title4 } from "../utilities/util";
// import PersonProfile from "@/components/PersonProfile";
import SwiperProfile from "@/components/SwiperProfile";

const Home = () => {
  return (
    <>
      <div className="bg-[radial-gradient(120%_190%_at_90%_15%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Navbar />
        <Hero />
        <Numbers />
        <BoxSection title={title4} titleDescription={titleDescription} />
        {/* <PersonProfile /> */}
        <SwiperProfile />
      </div>
    </>
  );
};

export default Home;
