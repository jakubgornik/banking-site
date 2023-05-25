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
      <Navbar />
      <Hero />
      <Numbers />
      <BoxSection />
      <ContactSection />
      <SwiperSection />
      <GridSection />
      <Footer />
    </>
  );
};

export default Home;
