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
          "fixed bottom-0 z-10 flex w-full items-center justify-evenly bg-white/50 backdrop-blur-xl sm:relative sm:h-full sm:w-max sm:flex-col sm:items-center sm:justify-start sm:gap-y-[55px]  sm:bg-none sm:px-[40px] sm:pt-[110px] sm:backdrop-blur-0 md:px-[50px]",
          className,
        )}
      >
        {links.map((link, index) => (
          <Links key={index} icon={link.icon} link={link.link} />
        ))}

        <AuthButton
          auth="signOut"
          className="icon bg- px-0 text-4xl hover:scale-110  "
        >
          <CiLogout />
        </AuthButton>
      </div>
    </>
  );
};

export default Navbar;
