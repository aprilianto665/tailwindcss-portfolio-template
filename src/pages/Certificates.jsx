import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certificates } from "../utils/certificatesData";
import CertificateCard from "../components/CertificateCard";
import { GreenDecorativeElements } from "../components/DecorativeElements";
import SectionHeader from "../components/SectionHeader";
import MedalLogo from "../components/MedalLogo";

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Scroll animation setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -20]);

  // Categories for filtering
  const filterCategories = ["All", "Frontend", "Backend", "Others"];

  // Function to filter certificates based on selected category
  const filterCertificates = (certificates, category) => {
    if (category === "All") return certificates;

    if (category === "Others") {
      return certificates.filter(
        (cert) =>
          cert.categories &&
          cert.categories.includes("Others") &&
          cert.categories.length === 1
      );
    }

    return certificates.filter(
      (cert) => cert.categories && cert.categories.includes(category)
    );
  };

  const normalizedCertificates = certificates.map((cert) => {
    if (!cert.categories) {
      return {
        ...cert,
        categories: cert.category ? [cert.category] : ["Others"],
      };
    }
    return cert;
  });

  const certificatesWithIcons = normalizedCertificates.map((cert) => ({
    ...cert,
    image: <MedalLogo />,
  }));

  // Filter certificates based on active filter
  const filteredCertificates = filterCertificates(
    certificatesWithIcons,
    activeFilter
  );

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Header animation with intersection observer
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Filter buttons animation with intersection observer
  const [filtersRef, filtersInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-screen mx-auto py-4 bg-gray-800 text-gray-200 pb-16 relative overflow-hidden min-h-screen">
      {/* Parallax Decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <GreenDecorativeElements />
      </motion.div>

      {/* Header Section with animation */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeader
          title="Certificates"
          description="Professional certifications and courses I've completed to enhance my skills and knowledge."
          color="green"
          underlineWidth="w-[265px]"
        />
      </motion.div>

      {/* Filter Buttons with animation */}
      <div className="container 2xl:w-[1280px] mx-auto px-4 sm:px-16 mb-8">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          ref={filtersRef}
          initial={{ opacity: 0, y: 20 }}
          animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Certificates Grid with staggered animations */}
      <div className="container 2xl:w-[1280px] mx-auto px-4 sm:px-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCertificates.map((cert, index) => (
            <CertificateCardWithAnimation
              key={cert.id}
              certificate={cert}
              index={index}
            />
          ))}
        </motion.div>

        {filteredCertificates.length === 0 && (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">
              No certificates found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Wrapper component for CertificateCard with animation
function CertificateCardWithAnimation({ certificate, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <CertificateCard certificate={certificate} />
    </motion.div>
  );
}
