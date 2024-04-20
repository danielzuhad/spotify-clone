import cn from "@/lib/cn";
import { ReactNode } from "react";

type TableDataTrackProps = {
  children: ReactNode;
  className?: string;
};

const TableDataTrack = ({ children, className }: TableDataTrackProps) => {
  return (
    <>
      <div className={cn("col-span-1 max-sm:text-xs", className)}>
        {children}
      </div>
    </>
  );
};

export default TableDataTrack;
