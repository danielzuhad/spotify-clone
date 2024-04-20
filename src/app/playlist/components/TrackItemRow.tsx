import { ArtistType } from "../types";
import TableDataTrack from "./TableDataTrack";
import TableRowPlaylist from "./TableRowPlaylist";
import { IoTimeOutline } from "react-icons/io5";

type TrackItemRowProps = {
  number: number;
  albumName: string;
  artist: ArtistType[];
  title: string;
  time: number;
};

const TrackItemRow = ({
  number,
  title,
  albumName,
  artist,
  time,
}: TrackItemRowProps) => {
  return (
    <TableRowPlaylist className="mt-2 items-center rounded-md p-2 py-4 hover:cursor-pointer hover:bg-[#b1b1b1]/10">
      {/* Number */}
      <TableDataTrack className="col-span-1 w-10">
        <p className="text-center font-normal text-[#b1b1b1]">{number}</p>
      </TableDataTrack>

      {/* Title & Artists */}
      <TableDataTrack className="col-span-5 ">
        <p className="line-clamp-1 w-full pr-10 text-left font-semibold text-black">
          {title}
        </p>

        <p className="t text-left font-normal text-[#b1b1b1]">
          {artist.map((artist) => artist.name).join(", ")}
        </p>
      </TableDataTrack>

      {/* Album */}
      <TableDataTrack className="col-span-5">
        <p className="line-clamp-1  w-full pr-10 text-left font-normal text-[#b1b1b1]">
          {albumName || "-"}
        </p>
      </TableDataTrack>

      {/* Time */}
      <TableDataTrack className="col-span-1 flex items-center gap-1">
        <p className="text-left font-normal text-[#b1b1b1] ">{time || "-"}</p>

        <IoTimeOutline size={20} color="#b1b1b1" />
      </TableDataTrack>
    </TableRowPlaylist>
  );
};

export default TrackItemRow;
