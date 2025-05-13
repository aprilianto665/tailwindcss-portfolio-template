import React from "react";
import { motion } from "framer-motion";
import ProjectIcon from "./ProjectIcon";

// Navigation buttons and thumbnails component
const Navigation = ({
  projects,
  activeIndex,
  handleThumbnailClick,
  navigateProject,
  thumbnailsRef,
  thumbnailsContainerRef,
}) => (
  <>
    <div className="flex items-center justify-between mb-4">
      {/* Previous button */}
      <motion.button
        onClick={() => navigateProject("prev")}
        className="flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
        aria-label="Previous project"
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      {/* Thumbnails container */}
      <div
        className="flex-grow mx-4 overflow-hidden"
        ref={thumbnailsContainerRef}
      >
        <div
          ref={thumbnailsRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-4 justify-center snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`thumb-${index}-${project.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              onClick={() => handleThumbnailClick(index)}
              className="relative flex-shrink-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.05,
                duration: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`cursor-pointer min-w-[150px] h-[84px] overflow-hidden transition-all duration-300 snap-center ${
                  activeIndex === index
                    ? "border-4 border-pink-600 shadow-[4px_4px_0px_#4B5563] scale-105"
                    : "border-2 border-gray-700 opacity-70 hover:opacity-100 hover:border-pink-600/50"
                }`}
              >
                <div className="p-1 h-full flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-sm overflow-hidden">
                  {project.img ? (
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-sm"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <ProjectIcon className="h-10 w-10" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next button */}
      <motion.button
        onClick={() => navigateProject("next")}
        className="flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
        aria-label="Next project"
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </div>
  </>
);

// Slide indicators component
export const SlideIndicators = ({
  projects,
  activeIndex,
  handleThumbnailClick,
}) => (
  <motion.div
    className="flex justify-center gap-2 mt-2 mb-2"
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.2 }}
  >
    {projects.map((_, index) => (
      <motion.button
        key={`indicator-${index}`}
        onClick={() => handleThumbnailClick(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          activeIndex === index
            ? "bg-pink-500 w-4"
            : "bg-gray-600 hover:bg-gray-400"
        }`}
        aria-label={`Go to slide ${index + 1}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3 + index * 0.03,
          duration: 0.2,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
    ))}
  </motion.div>
);

export default Navigation;
