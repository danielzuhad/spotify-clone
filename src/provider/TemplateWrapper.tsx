"use client";

import { animationSection } from "@/animation/Variants";
import cn from "@/lib/cn";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TemplateWrapperProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

const TemplateWrapper = ({ children, className }: TemplateWrapperProps) => {
  return (
    <>
      <motion.div
        variants={animationSection}
        transition={{ type: "easeIn", duration: 0.5 }}
        initial="initial"
        animate="animate"
        className={cn("glass h-full w-full rounded-lg p-3", className)}
      >
        {children}
      </motion.div>
    </>
  );
};

export default TemplateWrapper;
