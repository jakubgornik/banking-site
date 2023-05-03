import NumbersItem from "./NumbersItem";

const Numbers = () => {
  return (
    <div className="w-full">
      <div className="px-16">
        <div className=" mx-auto flex items-center justify-center px-4 mobile:flex-col mobile:space-x-0 mobile:space-y-6 mobile:pt-16 md:flex-row  md:space-y-0 md:space-x-8 md:pt-32 lg:space-x-12">
          <NumbersItem countTime={5} countTo={4500} suffix="ACTIVE USERS" />
          <NumbersItem countTime={5} countTo={1400} suffix="TRANSACTIONS" />
          <NumbersItem countTime={5} countTo={700} suffix="TRUSTED" />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
