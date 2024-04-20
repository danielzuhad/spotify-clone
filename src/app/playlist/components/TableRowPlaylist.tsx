import cn from "@/lib/cn";

type TableRowPlaylistProps = {
  children?: React.ReactNode;
  className?: string;
};

const TableRowPlaylist = ({ children, className }: TableRowPlaylistProps) => {
  return (
    <>
      <div className={cn("grid w-full grid-cols-12", className)}>
        {children}
      </div>
    </>
  );
};

export default TableRowPlaylist;
