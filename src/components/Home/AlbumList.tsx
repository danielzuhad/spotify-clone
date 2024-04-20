import React from "react";

import cn from "@/lib/cn";
import { AlbumType } from "@/type";
import Card from "./Card";
import { axiosInstance } from "@/lib/spotify-api";

interface Props {
  className?: string;
  accessToken?: string;
}

const AlbumList = async ({ className, accessToken }: Props) => {
  const response = await axiosInstance.get("/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const datas: AlbumType[] = await response.data.items;

  return (
    <>
      <section
        className={cn(
          "  flex h-full w-full flex-wrap justify-between pb-52 sm:pb-48 sm:pt-10 xl:gap-5",
          className,
        )}
      >
        {datas.map((data: AlbumType, i: number) => (
          <Card key={i} id={data.id} name={data.name} images={data.images} />
        ))}
      </section>
    </>
  );
};

export default AlbumList;
