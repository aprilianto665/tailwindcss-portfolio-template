import { Link } from "react-router-dom";
import ParallaxBackground from "../components/ParallaxBackground";

function NotFound() {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Content Area with Parallax Background */}
      <div className="relative overflow-hidden min-h-screen">
        <ParallaxBackground
          color="rgba(239, 68, 68, 0.3)"
          speed={0.15}
          pattern="diagonal"
        />

        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center z-10 relative">
            <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-4xl font-semibold mt-4 text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-lg mt-6 text-gray-300 max-w-lg mx-auto mb-10">
              The page you're looking for doesn't exist.
            </p>

            <div className="inline-block transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <Link
                to="/"
                className="inline-block p-3 pr-6 border-2 border-red-600 shadow-[4px_4px_0px_#4B5563] hover:shadow-[4px_6px_0px_#4B5563] bg-gray-800 backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300 rounded-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <div className="ml-2 font-medium text-white group-hover:text-red-300 transition-colors duration-300">
                  Back to Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
