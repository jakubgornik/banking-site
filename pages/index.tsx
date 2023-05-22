import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import BoxSection from "@/components/BoxSection";
import SwiperSection from "@/components/SwiperSection";
import GridSection from "@/components/GridSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <div className="bg-[radial-gradient(120%_190%_at_90%_15%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Navbar />
        <Hero />
        <Numbers />
        <BoxSection />
        <SwiperSection />
        {/* To do valdiation post data to db aniamte form display form below on lg: */}
        <ContactSection />
        <GridSection />
        {/* To do cta events */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
