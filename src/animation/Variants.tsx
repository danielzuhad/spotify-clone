import { Variants } from "framer-motion";

export const animationSection: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },

  animate: {
    opacity: 1,
    y: 0,
  },
};

export const animationContainerCard: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const animationCard: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
