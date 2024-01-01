"use client";

import cn from "@/lib/cn";
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
          "icon 5 text-4xl  text-primary-default transition-all hover:scale-110 active:scale-75  ",
          path === link && "text-primary-black  font-extrabold  ",
        )}
        href={link}
      >
        {icon}
      </Link>
    </>
  );
};

export default Links;
