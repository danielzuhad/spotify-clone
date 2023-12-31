import React from "react";

import cn from "@/utils/cn";
import { PlaylistType } from "@/type";
import Card from "./Card";
import { axiosInstance } from "@/lib/spotify-api";

interface PlaylistProps {
  className?: string;
  accessToken?: string;
}

const Playlist = async ({ className, accessToken }: PlaylistProps) => {
  const response = await axiosInstance.get("/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const datas: PlaylistType[] = await response.data.items;

  return (
    <>
      <section
        className={cn(
          "  flex h-full w-full flex-wrap justify-between pb-52 sm:pb-48 sm:pt-10 xl:gap-5",
          className,
        )}
      >
        {datas.map((data: PlaylistType, i: number) => (
          <Card key={i} id={data.id} name={data.name} images={data.images} />
        ))}
      </section>
    </>
  );
};

export default Playlist;
