import NumbersItem from "./NumbersItem";

const Numbers = () => {
  return (
    <div id="about" className="w-full">
      <div className="px-10 pb-28 lg:px-16 xl:px-20  2xl:pb-36">
        <div className=" mx-auto flex max-w-[1440px] items-center justify-center mobile:flex-col  mobile:space-x-0 mobile:space-y-6 md:flex-row  md:space-y-0  md:space-x-8 lg:space-x-12  xl:justify-around">
          <NumbersItem countTime={5} countTo={4500} suffix="ACTIVE USERS" />
          <NumbersItem countTime={5} countTo={1400} suffix="TRANSACTIONS" />
          <NumbersItem countTime={5} countTo={700} suffix="TRUSTED" />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
