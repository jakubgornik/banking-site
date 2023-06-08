import NumbersItem from "./NumbersItem";
import { motion } from "framer-motion";

const Numbers = () => {
  return (
    <div id="about" className="w-full">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-10 pb-40 lg:px-16 xl:px-20  "
      >
        <div className=" mx-auto flex max-w-[1440px] items-center justify-center mobile:flex-col  mobile:space-x-0 mobile:space-y-6 md:flex-row  md:space-y-0  md:space-x-8 lg:space-x-12  xl:justify-around">
          <NumbersItem countTime={5} countTo={4500} suffix="ACTIVE USERS" />
          <NumbersItem countTime={5} countTo={1400} suffix="TRANSACTIONS" />
          <NumbersItem countTime={5} countTo={700} suffix="TRUSTED" />
        </div>
      </motion.div>
    </div>
  );
};

export default Numbers;
