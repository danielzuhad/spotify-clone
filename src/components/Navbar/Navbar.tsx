"use client";

import { VscAccount } from "react-icons/vsc";
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
  { link: "/", icon: <GoHome size={30} stroke="1" />, label: "Home" },
  { link: "/profile", icon: <VscAccount size={28} />, label: "Profile" },
  { link: "/search", icon: <IoIosSearch size={30} />, label: "Search" },
  { link: "/login", icon: <CiLogout size={30} />, label: "Logout" },
];

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 z-10 flex w-full  justify-evenly bg-white/40 backdrop-blur-sm sm:relative sm:h-full  sm:w-[200px] sm:flex-col sm:items-center sm:justify-start sm:gap-y-[30px]  sm:bg-none sm:pt-5 sm:backdrop-blur-0  ",
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
