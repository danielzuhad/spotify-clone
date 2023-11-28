"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkProps {
  icon: React.ReactNode;
  link: string;
}

const Links = ({ link, icon }: LinkProps) => {
  const path = usePathname();

  return (
    <>
      <Link
        className={cn(
          "text-4xl text-onPrimary-20 transition-all duration-300 hover:text-onPrimary-30 sm:text-5xl",
          path === link && "font-bold  text-onPrimary-40  ",
        )}
        href={link}
      >
        {icon}
      </Link>
    </>
  );
};

export default Links;
