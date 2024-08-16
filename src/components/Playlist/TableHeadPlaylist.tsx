import cn from "@/lib/cn";
import TableRowPlaylist from "./TableRowPlaylist";
import { TABLE_HEADS } from "@/app/playlist/constants";

type TableHeadPlaylistProps = {};

const TableHeadPlaylist = ({}: TableHeadPlaylistProps) => {
  const colSpans = [1, 5, 5, 1];

  return (
    <>
      <div>
        <TableRowPlaylist onClick={() => {}} className="px-2">
          {/* <th className="col-span-1">Title</th>
        <th className="col-span-4">Title</th>
        <th className="col-span-3">Title</th>
        <th className="col-span-3">Title</th>
      <th className="col-span-1">Title</th> */}

          {TABLE_HEADS.map((head, index) => (
            <p
              key={index}
              className={cn(
                `col-span-${colSpans[index]} font-normal text-[#b1b1b1] max-md:text-xs`,
                head !== "#" && "text-left",
                head === "#" && "w-10",
              )}
            >
              {head}
            </p>
          ))}
        </TableRowPlaylist>
      </div>
    </>
  );
};

export default TableHeadPlaylist;
