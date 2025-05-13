import React from "react";
import { motion } from "framer-motion";
import ProjectIcon from "./ProjectIcon";
import { itemVariants } from "./animations";

// Project image component
const ProjectImage = ({ project }) => (
  <motion.div 
    className="w-full md:w-3/5"
    variants={itemVariants}
  >
    <motion.div 
      className="relative h-[350px] sm:h-[400px] md:h-[380px] overflow-hidden mb-4 bg-gray-900/50 rounded-md flex items-center justify-center p-0 sm:p-4 group-hover:bg-gray-900/70 transition-colors duration-300"
      variants={itemVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/5"></div>
      
      {project.img ? (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
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
          <ProjectIcon />
        </motion.div>
      )}
    </motion.div>
  </motion.div>
);

// Project info component
const ProjectInfo = ({ project, activeIndex }) => (
  <motion.div 
    className="w-full md:w-2/5 flex flex-col justify-between"
    variants={itemVariants}
  >
    <div>
      <motion.h2 
        className="text-3xl font-bold text-pink-300 mb-2"
        variants={itemVariants}
      >
        {project.title}
      </motion.h2>
      
      <motion.p 
        className="text-gray-300 mb-4"
        variants={itemVariants}
      >
        {project.description}
      </motion.p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span
            key={`tag-${activeIndex}-${index}`}
            className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-pink-300 border border-pink-500/30 hover:bg-pink-600/20 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Button */}
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium transition-colors duration-300 group self-start"
      variants={itemVariants}
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
  </motion.div>
);

// Combined project content component
const ProjectContent = ({ project, activeIndex }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <ProjectImage project={project} />
    <ProjectInfo project={project} activeIndex={activeIndex} />
  </div>
);

export default ProjectContent;