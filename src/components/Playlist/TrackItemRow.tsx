import { TrackItemType } from "@/type";
import TableDataTrack from "./TableDataTrack";
import TableRowPlaylist from "./TableRowPlaylist";
import { IoTimeOutline } from "react-icons/io5";
import { ComponentProps } from "react";
import { albumName, artistName, time, title } from "@/app/playlist/utils";

type TrackItemRowProps = ComponentProps<"div"> & {
  track: TrackItemType;
  number: number;
  onClick: () => void;
};

const TrackItemRow = ({ number, track, onClick }: TrackItemRowProps) => {
  return (
    <TableRowPlaylist
      onClick={onClick}
      className="mt-2 items-center rounded-md p-2 py-4 backdrop-blur-sm transition-all hover:cursor-pointer  hover:bg-[#b1b1b1]/10 hover:shadow-sm "
    >
      {/* Number */}
      <TableDataTrack className="col-span-1 w-10">
        <p className="pl-1 text-start font-normal text-[#b1b1b1]">{number}</p>
      </TableDataTrack>

      {/* Title & Artists */}
      <TableDataTrack className="col-span-5 ">
        <p className="line-clamp-1 w-full pr-10 text-left font-semibold text-black">
          {title(track)}
        </p>

        <p className="t text-left font-normal text-[#b1b1b1]">
          {artistName(track)
            .map((artist) => artist.name)
            .join(", ")}
        </p>
      </TableDataTrack>

      {/* Album */}
      <TableDataTrack className="col-span-5">
        <p className="line-clamp-1  w-full pr-10 text-left font-normal text-[#b1b1b1]">
          {albumName(track) || "-"}
        </p>
      </TableDataTrack>

      {/* Time */}
      <TableDataTrack className="col-span-1 flex items-center gap-1">
        <p className="text-left font-normal text-[#b1b1b1] ">
          {time(track) || "-"}
        </p>

        <IoTimeOutline size={20} color="#b1b1b1" />
      </TableDataTrack>
    </TableRowPlaylist>
  );
};

export default TrackItemRow;
