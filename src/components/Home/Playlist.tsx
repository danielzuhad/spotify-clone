import React from "react";
import axios from "axios";

import cn from "@/utils/cn";
import { PlaylistType } from "@/type";
import Card from "./Card";

interface PlaylistProps {
  className?: string;
  accessToken?: string;
}

const Playlist = async ({ className, accessToken }: PlaylistProps) => {
  const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const datas: PlaylistType[] = await response.data.items;

  return (
    <>
      <section
        className={cn(
          " mx-auto grid w-full grid-cols-4 justify-items-center",
          className,
        )}
      >
        {datas.map((data: PlaylistType, i: number) => (
          <Card key={i} name={data.name} images={data.images} />
        ))}
      </section>
    </>
  );
};

export default Playlist;
