import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
