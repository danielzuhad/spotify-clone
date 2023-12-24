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
          "icon text-4xl text-primary-high transition-all duration-300 hover:text-primary-low sm:text-5xl ",
          path === link && "font-bold  text-primary-default  ",
        )}
        href={link}
      >
        {icon}
      </Link>
    </>
  );
};

export default Links;
