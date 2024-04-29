import cn from "@/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const layoutVariants = cva(" relative flex", {
  variants: {
    variant: {
      root: "container overflow-hidden sm:p-1 pr-1",
      page: "w-full h-[95vh] flex-col overflow-y-auto ",
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
