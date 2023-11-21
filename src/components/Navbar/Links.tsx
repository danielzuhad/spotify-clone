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
          "text-onPrimary-20 text-4xl transition-all duration-300 sm:text-5xl ",
          path === link && "text-onPrimary-40  font-bold  ",
        )}
        href={link}
      >
        {icon}
      </Link>
    </>
  );
};

export default Links;
