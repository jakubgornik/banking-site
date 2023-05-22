import FormModal from "./FormModal";
import ContactSectionBox from "./ContactSectionBox";
import {
  contactDescription1,
  contactDescription2,
  contactDescription3,
} from "@/utilities/util";
import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

const Form = () => {
  const [isFixed, setIsFixed] = useState<boolean>();
  const [isBottom, setIsBottom] = useState<boolean>();
  const { scrollY } = useScroll();
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = scrollY.get();
      console.log(currentScrollY);

      if (currentScrollY > 2260 && currentScrollY < 2900) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      if (currentScrollY > 2900 && !isFixed) {
        setIsBottom(true);
      } else if (currentScrollY < 2260 && !isFixed) {
        setIsBottom(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isFixed, setIsFixed]);

  return (
    <div className="relative mb-28 w-full ">
      {/* Sticky form up to lg default absolute on scroll range position fixed top-14 bottom-14*/}
      <div
        className={`
        ${isFixed ? "fixed " : "absolute"}  
         ${isBottom ? "bottom-0" : "top-0"}
           left-[60%]  z-10 mx-auto  hidden h-[600px] w-[400px]  max-w-[1440px] rounded-lg border-2 border-slate-900 shadow-2xl backdrop-blur-lg xl:block`}
      >
        <FormModal />
      </div>
      <div className=" rounded-t-[100px] bg-gradient-to-tr  from-slate-900 to-[#002738] px-10 lg:px-16 xl:px-20">
        <ContactSectionBox title={contactDescription1} />
      </div>
      <div className=" bg-gradient-to-tr from-slate-900 to-[#002738] px-10 lg:px-16 xl:px-20">
        <ContactSectionBox title={contactDescription2} />
      </div>
      <div className="bg-gradient-to-tr from-slate-900  to-[#002738] px-10 lg:px-16  xl:rounded-b-[100px] xl:px-20">
        <ContactSectionBox title={contactDescription3} />
      </div>
      {/* Form on screens below lg */}
      <div className="w-full rounded-b-[100px] bg-gradient-to-br from-slate-900 to-[#002738]  py-14 xl:hidden">
        <div className="mx-auto h-[600px] w-[300px] max-w-[1440px] rounded-lg border-2 border-slate-900  shadow-2xl backdrop-blur-lg sm:w-[400px]">
          <FormModal />
        </div>
      </div>
    </div>
  );
};

export default Form;
