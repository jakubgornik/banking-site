import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import BoxSection from "@/components/BoxSection";
import SwiperSection from "@/components/SwiperSection";
import GridSection from "@/components/GridSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>{"EasyBank - Next Gen Banking"}</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Numbers />
        <BoxSection />
        <ContactSection />
        <SwiperSection />
        <GridSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
