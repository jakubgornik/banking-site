import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import BoxSection from "@/components/BoxSection";
import SwiperProfile from "@/components/SwiperProfile";
import GridSection from "@/components/GridSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[radial-gradient(120%_190%_at_90%_15%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Navbar />
        <Hero />
        <Numbers />
        <BoxSection />
        <SwiperProfile />
        <GridSection />
        {/* To do cta form events */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
