"use client";

import { MdOutlineFeedback } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import React from "react";

import cn from "@/lib/cn";
import { LinkType } from "./types";
import Links from "./Links";
import { signOut } from "next-auth/react";

interface NavbarProps extends React.ComponentProps<"div"> {
  className?: string;
}

const links: LinkType[] = [
  { link: "/", icon: <GoHome size={25} stroke="1" />, label: "Home" },
  {
    link: "/information",
    icon: <MdOutlineFeedback size={23} />,
    label: "Information",
  },
  { link: "/search", icon: <IoIosSearch size={25} />, label: "Search" },
  { link: "", icon: <CiLogout size={25} />, label: "Logout" },
];

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <>
      <div
        className={cn(
          "glass fixed bottom-0 left-[-1px] z-10 flex w-full justify-evenly rounded-md    sm:relative sm:h-max sm:flex-col sm:items-center  sm:justify-start sm:gap-y-[15px] sm:rounded-lg sm:bg-none sm:p-3 sm:py-5  sm:shadow-sm md:py-8 ",
          className,
        )}
      >
        {links.map((link, index) =>
          link.label === "Logout" ? (
            <Links onClick={signOut} key={index} link={link} />
          ) : (
            <Links key={index} link={link} />
          ),
        )}
      </div>
    </>
  );
};

export default Navbar;
