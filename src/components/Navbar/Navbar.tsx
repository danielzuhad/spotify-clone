"use client";

import { GoHome } from "react-icons/go";
import { IoIosInformationCircleOutline, IoIosSearch } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import React from "react";

import cn from "@/lib/cn";
import { LinkType } from "./types";
import Links from "./Links";
import { signOut } from "next-auth/react";
import { AiOutlineLike } from "react-icons/ai";

interface NavbarProps extends React.ComponentProps<"div"> {
  className?: string;
}

const links: LinkType[] = [
  { link: "/", icon: <GoHome size={25} strokeWidth="0.05" />, label: "Home" },
  { link: "/liked", icon: <AiOutlineLike size={23} />, label: "Liked" },
  {
    link: "/information",
    icon: <IoIosInformationCircleOutline size={23} strokeWidth="5" />,
    label: "Information",
  },
  {
    link: "/search",
    icon: <IoIosSearch size={25} strokeWidth="2.5" />,
    label: "Search",
  },
  {
    link: "",
    icon: <CiLogout size={25} strokeWidth="0.3" />,
    label: "Logout",
  },
];

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <>
      <div
        className={cn(
          "glass fixed bottom-0 left-[-1px] z-10 flex w-full justify-evenly     sm:relative sm:h-max sm:flex-col sm:items-center  sm:justify-start sm:gap-y-[15px] sm:rounded-lg sm:bg-none sm:p-3 sm:py-5  sm:shadow-sm md:py-8 ",
          className,
        )}
      >
        {links.map((link, index) =>
          link.label === "Logout" ? (
            <React.Fragment key={index}>
              <div className="w-full max-sm:hidden">
                <div className="w-full border-[1px] border-black/10 max-sm:hidden sm:mt-5" />

                {/* Tablet / Desktop */}
                <LogoutButton
                  className="max-sm:hidden sm:mt-8"
                  index={index}
                  link={link}
                  onClick={signOut}
                />
              </div>

              {/* Mobile Version */}
              <LogoutButton
                className="sm:mt-8  sm:hidden"
                index={index}
                link={link}
                onClick={signOut}
              />
            </React.Fragment>
          ) : (
            <Links key={index} link={link} />
          ),
        )}
      </div>
    </>
  );
};

export default Navbar;

const LogoutButton = ({
  onClick,
  index,
  link,
  className,
}: {
  onClick: () => void;
  index: number;
  link: LinkType;
  className?: string;
}) => {
  return (
    <>
      <Links
        className={cn(
          "bg-[#ff858d]/30 hover:bg-[#ff858d] hover:text-white ",
          className,
        )}
        onClick={onClick}
        key={index}
        link={link}
      />
    </>
  );
};
