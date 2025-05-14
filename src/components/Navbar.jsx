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
          <Link
            to="/"
            className="group relative mt-4 mx-2 inline-block md:mt-0"
          >
            <div className="relative px-5 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl animate-gradient-x"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-gradient-x"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500 rounded-xl"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-0 h-0 group-hover:w-full group-hover:h-full bg-gradient-to-br from-white/10 via-cyan-400/20 to-transparent rounded-full blur-lg transition-all duration-700 animate-pulse"></div>
              </div>
              <span className="relative z-10 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-200 animate-gradient-x group-hover:from-white group-hover:via-cyan-200 group-hover:to-blue-100 transition-all duration-300">
                {name}
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-xl"></div>
            </div>
          </Link>
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
