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
          "w-full rounded-lg  px-8 py-2 text-xl text-primary-default backdrop-blur-sm transition-all hover:bg-black/5 sm:flex sm:justify-center",
          path === link.link && "bg-black/5 text-black ",
          className,
        )}
        href={link.link || ""}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <p className="max-md:text-base max-sm:hidden">{link.label}</p>

          {link.icon}
        </div>
      </Link>
    </>
  );
};

export default Links;
