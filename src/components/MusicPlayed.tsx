import "@/app/globals.css";
import { TrackType } from "@/type";
import { FaPlay } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

type MusicPlayedProps = {
  className?: string;
  track: TrackType;
};

const MusicPlayed = () => {
  return (
    <>
      <div className=" absolute bottom-7 flex w-full justify-center  px-1  sm:bottom-0 sm:px-0">
        <div className="glass flex h-full w-full  items-center justify-between rounded-md p-1">
          <div className="flex items-center ">
            <img
              alt="album-picture"
              className="aspect-square h-max w-16 rounded-md border-[1px] border-[#d8d8d8] md:w-24"
            />

            <div className="ml-2 ">
              <p className="text-lg font-semibold text-black">Title</p>
              <p className="text-sm text-[#828282]">Title</p>
            </div>
          </div>

          <div className="flex items-center gap-9 max-sm:mr-16 ">
            {/* Prev */}
            <div className="cursor-pointer max-sm:hidden">
              <GiPreviousButton size={25} color="#2A313C" />
            </div>

            <div className="cursor-pointer">
              <FaPlay size={25} color="#2A313C" />
            </div>
            {/* <IoIosPause size={30} color="#2A313C" /> */}

            <div className="cursor-pointer max-sm:hidden">
              <GiNextButton size={25} color="#2A313C" />
            </div>
          </div>

          <div>tests</div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayed;
