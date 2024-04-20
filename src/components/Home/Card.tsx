import Link from "next/link";

import { AlbumType } from "@/type";

const Card = ({ name, images, id }: AlbumType) => {
  const image = images?.[0]?.url;

  return (
    <>
      <Link
        href={`playlist/${id}`}
        className="mb-7 flex w-[40vw] flex-col items-center rounded-xl sm:w-52 md:w-64 lg:w-60 xl:w-56"
      >
        <img
          src={image}
          className=" aspect-square w-full rounded-lg object-cover shadow-md shadow-black transition-all hover:scale-105"
        />
        <h3
          className={`mt-2 line-clamp-1 w-full text-start text-sm font-semibold text-primary-default sm:text-lg lg:text-xl ${name}`}
        >
          {name}
        </h3>
      </Link>
    </>
  );
};

export default Card;
