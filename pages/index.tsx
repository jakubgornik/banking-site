import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import BoxSection from "@/components/BoxSection";
import SwiperProfile from "@/components/SwiperProfile";
import GridSection from "@/components/GridSection";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

const Home = () => {
  return (
    <>
      <div className="bg-[radial-gradient(120%_190%_at_90%_15%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Navbar />
        <Hero />
        <Numbers />
        <BoxSection />
        <SwiperProfile />
        {/* To do valdiation post data to db aniamte form display form below on lg: */}
        <Form />
        <GridSection />
        {/* To do cta events */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
