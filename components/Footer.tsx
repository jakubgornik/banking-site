import Link from "next/link";
import Image from "next/image";
import fbIcon from "../img/icons/fb.png";
import igIcon from "../img/icons/ig.png";
import lnkingIcon from "../img/icons/lnkin.png";
import twitterIcon from "../img/icons/twitter.png";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="rounded-t-[100px] bg-gradient-to-tr from-slate-900 to-[#002738] px-10 pb-8 pt-8 lg:px-16 xl:rounded-t-[150px] xl:px-20">
        <div className=" mx-auto flex max-w-[1440px] flex-col space-y-6">
          <div className="flex flex-col items-center space-y-6 border-b border-b-[#1D2B41]  pb-6 sm:flex-row sm:justify-between sm:space-y-0 ">
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-white">
                Lets talk
              </span>
              <button className="h-12 w-40 rounded-full border border-mint  font-medium  text-white shadow-2xl transition-all duration-1000 hover:bg-mint hover:bg-opacity-60 ">
                <Link href="#contact">Contact</Link>
              </button>
            </div>
            <div className="flex items-center gap-8">
              <Link target="#" href="https://www.facebook.com/">
                <Image alt="facebook icon" src={fbIcon} />
              </Link>
              <Link target="#" href="https://www.instagram.com/">
                <Image alt="facebook icon" src={igIcon} />
              </Link>
              <Link target="#" href="https://www.linkedin.com/">
                <Image alt="facebook icon" src={lnkingIcon} />
              </Link>
              <Link target="#" href="https://www.twitter.com/">
                <Image alt="facebook icon" src={twitterIcon} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 border-b border-b-[#1D2B41] pb-6 text-white sm:flex-row sm:justify-between sm:space-y-0 ">
            <p className="self-start text-left font-semibold sm:self-auto">
              HQ located in Poland
            </p>
            <div className="flex flex-row gap-6 self-start sm:flex-row sm:self-auto">
              <div className="flex flex-col ">
                <p>Address</p>
                <p>Additional address</p>
              </div>
              <div className="flex flex-col">
                <p>mail@somemail.com</p>
                <p>+48 111 111 111</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between font-semibold text-white mobile:space-x-2  mobile-lg:space-x-4 sm:space-x-6 xl:justify-start xl:space-x-48 ">
            <Link scroll={false} href="#home">
              <p className="duration-500 hover:text-mint">Home</p>
            </Link>
            <Link scroll={false} href="#about">
              <p className="duration-500 hover:text-mint">About</p>
            </Link>
            <Link scroll={false} href="#reviews">
              <p className="duration-500 hover:text-mint">Reviews</p>
            </Link>
            <Link scroll={false} href="#events">
              <p className="duration-500 hover:text-mint">Events</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
