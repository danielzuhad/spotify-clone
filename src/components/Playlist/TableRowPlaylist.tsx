import cn from "@/lib/cn";

type TableRowPlaylistProps = {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
};

const TableRowPlaylist = ({
  children,
  className,
  onClick,
}: TableRowPlaylistProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className={cn("grid w-full grid-cols-12", className)}
      >
        {children}
      </div>
    </>
  );
};

export default TableRowPlaylist;
