import { PlaylistType } from "@/type";
import Link from "next/link";
import React from "react";

const Card = ({ name, images, id }: PlaylistType) => {
  const image = images?.[0]?.url;

  return (
    <>
      <Link
        href={`playlist/${id}`}
        className="flex w-[40vw] flex-col items-center rounded-xl  transition-all  hover:scale-105  "
      >
        <img
          src={image}
          className=" aspect-square w-full rounded-lg object-cover"
        />
        <h3 className="mt-2 line-clamp-1 w-full text-start text-sm font-semibold text-primary-default sm:text-lg lg:text-xl">
          {name}
        </h3>
      </Link>
    </>
  );
};

export default Card;
