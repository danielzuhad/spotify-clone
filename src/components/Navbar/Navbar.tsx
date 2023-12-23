import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import React from "react";

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
          "absolute bottom-0 flex w-full items-center justify-center gap-14 py-4  backdrop-blur-sm sm:relative sm:left-0 sm:h-full  sm:w-[120px] sm:flex-col sm:px-2  sm:pb-40",
          className,
        )}
      >
        {links.map((link, index) => (
          <Links key={index} icon={link.icon} link={link.link} />
        ))}

        <AuthButton className="icon bg- px-0 text-4xl ">
          <CiLogout />
        </AuthButton>
      </div>
    </>
  );
};

export default Navbar;
