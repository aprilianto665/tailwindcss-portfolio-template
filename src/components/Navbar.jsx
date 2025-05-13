import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { websiteName } from "../utils/siteInfo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getActiveLink = () => {
    const path = location.pathname;
    if (path === "/") return "about";
    if (path === "/portfolio") return "portfolio";
    if (path.includes("certificate")) return "contact";
    return "";
  };

  const activeLink = getActiveLink();
  const { name } = websiteName;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-screen mx-auto bg-gray-800">
      <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-5">
        <div className="flex flex-shrink-0 items-center py-2">
          <div className="group relative overflow-hidden mt-4 mx-2 inline-block md:mt-0 font-bold text-2xl bg-gradient-to-r from-white to-gray-100 px-5 py-3 border-4 border-black transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[6px_6px_0px_#000000] shadow-[4px_4px_0px_#000000] text-gray-800">
            <div className="absolute top-0 left-0 w-2 h-full bg-gray-800"></div>
            <span className="relative z-10">{name}</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border-2 border-gray-500 text-gray-300 hover:text-green-400 hover:border-green-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className={`fill-current h-4 w-4 transition-transform duration-500 ${
                menuOpen ? "rotate-90" : ""
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:flex md:items-center md:w-auto transition-all duration-500 ease-in-out ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="text-sm flex flex-col md:flex-row items-center justify-end w-full">
            <Link
              to={"/"}
              className={`relative block mt-4 mx-3 md:inline-block md:mt-0 font-bold text-lg px-4 py-2 transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
                activeLink === "about" ? "text-cyan-400" : "text-white"
              }`}
            >
              <span className="relative z-10">About Me</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transform transition-all duration-300 ${
                  activeLink === "about" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              to={"/portfolio"}
              className={`relative block mt-4 mx-3 md:inline-block md:mt-0 font-bold text-lg px-4 py-2 transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
                activeLink === "portfolio" ? "text-pink-400" : "text-white"
              }`}
            >
              <span className="relative z-10">Portfolio</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-pink-400 transform transition-all duration-300 ${
                  activeLink === "portfolio"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              to={"/certificates"}
              className={`relative block mt-4 mx-3 md:inline-block md:mt-0 font-bold text-lg px-4 py-2 transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
                activeLink === "contact" ? "text-green-400" : "text-white"
              }`}
            >
              <span className="relative z-10">Certificates</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-green-400 transform transition-all duration-300 ${
                  activeLink === "contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
