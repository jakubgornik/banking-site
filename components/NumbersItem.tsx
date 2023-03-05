import { CountUp } from "use-count-up";
interface Props {
  countTo: number;
  countTime: number;
  suffix: string;
}

const NumbersItem = ({ countTo, countTime, suffix }: Props) => {
  return (
    <>
      <div className=" justify gap flex cursor-default items-center justify-center gap-2 border-b border-transparent py-2 px-3 pb-3 transition-colors duration-700 hover:border-b-mint">
        <span className="text-3xl text-white">
          <CountUp isCounting end={countTo} duration={countTime} />
          {"+"}
        </span>
        <span className=" bg-gradient-to-r from-[#1D2B41] to-mint bg-clip-text text-center text-xl font-bold  text-transparent">
          {suffix}
        </span>
      </div>
    </>
  );
};

export default NumbersItem;
