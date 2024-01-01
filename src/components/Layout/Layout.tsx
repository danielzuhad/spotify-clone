import cn from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps } from "react";

const layoutVariants = cva("h-[97vh] relative flex", {
  variants: {
    variant: {
      root: "container   overflow-hidden rounded-xl  shadow-md shadow-black/50 ",
      page: "w-full max-h-screen overflow-y-auto px-5 xl:px-[40px] 2xl:px-[55px]",
    },
  },
});

type Props = {
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof layoutVariants>;

const Layout = ({ children, variant, className }: Props) => {
  return (
    <>
      <div className={cn(layoutVariants({ variant, className }))}>
        {children}
      </div>
    </>
  );
};

export default Layout;
