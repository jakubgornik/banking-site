import { useState, useEffect } from "react";

const NavigateUp = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed top-[90%] right-0 z-40 flex h-[40px] w-[40px] cursor-pointer items-center justify-center border-2 border-mint bg-transparent duration-500 hover:bg-opacity-50 lg:right-[20px]  ${
        isFixed
          ? "animate-opacity-desktop translate-y-0 sm:translate-x-0 "
          : "animate-opacity-mobile translate-y-[100px] sm:translate-x-[100px] sm:translate-y-0"
      }`}
    >
      <svg
        className="h-1/2 w-1/2 fill-mint"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.867 511.867"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M508.827,350.027L263.493,104.373c-4.267-4.053-10.88-4.053-15.147,0L3.12,350.027c-4.16,4.16-4.16,10.88,0,15.04
			l42.24,42.347c4.267,4.053,10.88,4.053,15.147,0L255.92,211.68l195.52,195.733c4.16,4.16,10.88,4.16,15.04,0l42.347-42.347
			C512.88,360.907,512.88,354.187,508.827,350.027z M459.013,384.8l-195.52-195.733c-4.16-4.16-10.88-4.16-15.04,0L52.933,384.8
			l-27.2-27.307L255.92,126.987l230.293,230.507L459.013,384.8z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NavigateUp;
