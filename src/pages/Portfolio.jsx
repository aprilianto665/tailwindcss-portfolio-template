import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../utils/projectsData";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SteamStyleFeatured from "../components/SteamStyleFeatured/index";
import { PinkDecorativeElements } from "../components/DecorativeElements";

export default function Portfolio() {
  // Filter projects to get only featured ones
  const featuredProjects = projects.filter((project) => project.featured);

  // Scroll animation setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Header animation with intersection observer
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Featured section animation with intersection observer
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // All projects section animation with intersection observer
  const [projectsHeaderRef, projectsHeaderInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-screen mx-auto py-4 bg-gray-800 text-gray-200 pb-16 relative overflow-hidden">
      {/* Parallax Decorative elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <PinkDecorativeElements />
      </motion.div>

      {/* Header Section with animation - styled like About Me page */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container 2xl:w-[1280px] mx-auto px-4 lg:px-8 pt-6"
      >
        <div className="relative mb-12 pt-8 sm:pt-10">
          <span className="absolute -top-0 sm:top-0 left-0 sm:left-0 right-0 sm:right-auto text-center sm:text-left text-8xl min-[550px]:text-8xl min-[640px]:text-9xl font-bold text-pink-600/10">
            Portfolio
          </span>
          <h1 className="text-center sm:text-left text-pink-300 text-5xl sm:text-6xl font-bold relative z-10">
            Portfolio
          </h1>
          <div className="mx-auto sm:mx-0 mt-2 bg-pink-600 w-[100px] h-1"></div>
          <p className="text-xl text-gray-300 max-w-2xl mt-4">
            Check out some of my recent projects and work I've been involved
            with.
          </p>
        </div>
      </motion.div>

      {/* Steam Style Featured Projects with animation */}
      {featuredProjects.length > 0 && (
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <SteamStyleFeatured projects={featuredProjects} />
        </motion.div>
      )}

      {/* All Projects Grid with staggered animations */}
      <div className="container 2xl:w-[1280px] mx-auto px-4 sm:px-16">
        <motion.h3
          className="text-2xl font-bold text-pink-300 mb-6"
          ref={projectsHeaderRef}
          initial={{ opacity: 0, x: -20 }}
          animate={
            projectsHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          All Projects
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCardWithAnimation
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Wrapper component for ProjectCard with animation
function ProjectCardWithAnimation({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px 50px 0px", // Trigger slightly before the element comes into view
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1, // Staggered delay based on index
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="h-full flex"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}
