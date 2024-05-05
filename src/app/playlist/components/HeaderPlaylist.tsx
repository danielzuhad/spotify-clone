/* eslint-disable @next/next/no-img-element */
import cn from "@/lib/cn";
import { PlaylistType } from "@/type";

type Props = {
  className?: string;
  playlist?: PlaylistType;
};

const HeaderPlaylist = ({ className, playlist }: Props) => {
  const image = playlist?.images?.[0]?.url;

  return (
    <>
      <div className={cn("flex w-full gap-5", className)}>
        <img
          src={image}
          alt="album-picture"
          className="aspect-square h-max w-28 rounded-xl  border-2 border-[#dedede] max-sm:mt-2 min-[400px]:w-32 md:w-40 lg:w-56 xl:w-60"
        />

        <div className=" flex w-full flex-col justify-between text-sm md:text-lg">
          {/* Title & Desc */}
          <div className=" w-full">
            <h1 className="line-clamp-2  py-2 text-xl font-bold leading-loose  text-black min-[400px]:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {playlist?.name}
            </h1>

            <p className=" line-clamp-2 text-xs text-[#b1b1b1] min-[400px]:mt-1 md:mt-2 md:text-sm">
              {playlist?.description}
            </p>
          </div>

          {/* Created By */}
          <div className="flex gap-1 text-black  max-sm:text-xs">
            <p>Created by </p>
            <p className="font-bold"> {playlist?.owner.display_name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPlaylist;
