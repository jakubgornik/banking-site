import NumbersItem from "./NumbersItem";

const Numbers = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-center px-4 mobile:flex-col mobile:space-x-0 mobile:space-y-6 mobile:pt-16 sm:pt-32  md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12">
        <NumbersItem countTime={5} countTo={4500} suffix="ACTIVE USERS" />
        <NumbersItem countTime={5} countTo={1400} suffix="TRANSACTIONS" />
        <NumbersItem countTime={5} countTo={700} suffix="TRUSTED" />
      </div>
    </>
  );
};

export default Numbers;
