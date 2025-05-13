import { motion } from "framer-motion";
import PortfolioIcon from "./PortfolioIcon";

export default function ProjectCard({ project }) {
  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] h-full w-full">
      <div className="relative bg-gray-800 border-4 border-pink-600 shadow-[6px_6px_0px_#4B5563] hover:shadow-[6px_7px_0px_#4B5563] p-5 h-full group overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

        {/* Project Vector Illustration with hover animation */}
        <div className="relative h-60 overflow-hidden mb-4 bg-gray-900/50 rounded-md flex items-center justify-center p-4 group-hover:bg-gray-900/70 transition-colors duration-300 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/5"></div>
          {project.img !== "" ? (
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={project.img}
                alt="Project"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ) : (
            <motion.div 
              className="w-32 h-32"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioIcon />
            </motion.div>
          )}
        </div>

        {/* Project Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-pink-300 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Tags with staggered animation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-pink-300 border border-pink-500/30"
                whileHover={{ backgroundColor: "rgba(219, 39, 119, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-auto">
            {/* Button with animation */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}