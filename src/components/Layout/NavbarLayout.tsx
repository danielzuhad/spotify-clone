import cn from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const NavbarLayout = ({ children, className }: Props) => {
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 z-10 flex w-full items-center justify-evenly bg-white/50 backdrop-blur-xl sm:relative sm:h-full sm:w-max sm:flex-col sm:items-center sm:justify-start  sm:gap-y-[55px]  sm:bg-none sm:px-[56px] sm:pt-[110px] sm:backdrop-blur-0",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default NavbarLayout;
