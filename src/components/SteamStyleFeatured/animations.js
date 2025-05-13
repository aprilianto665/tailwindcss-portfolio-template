// Animation variants for the featured projects component
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};