import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewTest from "@/components/NewTest";
import Numbers from "@/components/Numbers";

const Home = () => {
  return (
    <>
      <div className="bg-[radial-gradient(120%_190%_at_90%_15%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <Navbar />
        <Hero />
        <Numbers />
        <div className="h-[5000px]"></div>
      </div>
    </>
  );
};

export default Home;
