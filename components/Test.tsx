import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Test() {
  const { scrollY } = useScroll();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = scrollY.get();
      if (prevScrollY < currentScrollY && navbarOpen) {
        setNavbarOpen(false);
      } else if (prevScrollY > currentScrollY && !navbarOpen) {
        setNavbarOpen(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [prevScrollY, navbarOpen, scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-75 ${
        navbarOpen ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
      animate={{ y: prevScrollY > 80 ? (navbarOpen ? 0 : -80) : 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <a href="/" className="text-lg font-bold text-gray-800">
              Logo
            </a>
          </div>
          <div className="flex items-center">
            <ul className="hidden md:flex md:items-center md:space-x-6">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  {navbarOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm16-5H4v2h16V8z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
