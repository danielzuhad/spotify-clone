import { VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import React from "react";

import cn from "@/utils/cn";
import Links from "./Links";
import AuthButton from "../AuthButton";
import NavbarLayout from "../Layout/NavbarLayout";

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
      <NavbarLayout>
        {links.map((link, index) => (
          <Links key={index} icon={link.icon} link={link.link} />
        ))}

        <AuthButton
          auth="signOut"
          className="icon bg- px-0 text-4xl hover:scale-110  "
        >
          <CiLogout />
        </AuthButton>
      </NavbarLayout>
    </>
  );
};

export default Navbar;
