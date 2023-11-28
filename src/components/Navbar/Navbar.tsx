import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import React from "react";
import Link from "next/link";

import cn from "@/utils/cn";
import Links from "./Links";
import AuthButton from "../AuthButton";

interface NavbarProps extends React.ComponentProps<"div"> {
  className?: string;
}

const links = [
  { link: "/profile", icon: <VscAccount /> },
  { link: "/", icon: <GoHome /> },
  { link: "/search", icon: <IoIosSearch /> },
];

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <>
      <div
        className={cn(
          "absolute bottom-0  flex w-full items-center justify-center gap-10 bg-primary-80/5 py-1 backdrop-blur-sm sm:left-[-1.5em] sm:top-[10vh] sm:max-h-[70vh] sm:w-max sm:flex-col sm:rounded-full sm:px-1 sm:py-28  ",
          className,
        )}
      >
        {links.map((link, index) => (
          <Links key={index} icon={link.icon} link={link.link} />
        ))}

        <AuthButton className=" rounded-full text-2xl">
          <CiLogout />
        </AuthButton>
      </div>
    </>
  );
};

export default Navbar;