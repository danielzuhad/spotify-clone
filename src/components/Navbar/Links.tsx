"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import cn from "@/lib/cn";
import { LinkType } from "./types";

type LinkProps = {
  link: LinkType;
  className?: string;
  onClick?: () => void;
};

const Links = ({ link, className, onClick }: LinkProps) => {
  const path = usePathname();

  return (
    <>
      <Link
        onClick={onClick}
        className={cn(
          "sm:px- w-full  py-2 text-xl text-primary-default backdrop-blur-sm transition-all hover:bg-[#4141410b] sm:flex sm:justify-center sm:rounded-lg sm:px-12",
          path === link.link && "bg-black/5 text-black ",
          className,
        )}
        href={link.link || ""}
      >
        <div className="flex w-full items-center justify-center gap-2 sm:justify-between">
          <p className="max-sm:hidden sm:text-base md:text-lg">{link.label}</p>

          {link.icon}
        </div>
      </Link>
    </>
  );
};

export default Links;
