import { PlaylistType } from "@/type";
import React from "react";

const Card = ({ name, images }: PlaylistType) => {
  const image = images?.[0]?.url;

  return (
    <>
      <button className="transitio flex w-[42vw] flex-col items-center rounded-xl bg-primary-default/10 p-2 backdrop-blur-2xl hover:shadow-md hover:shadow-primary-low sm:mb-3 sm:w-[30vw] sm:p-4 lg:w-[25vw] xl:w-[19vw] 2xl:w-[15vw]">
        <img
          src={image}
          className="aspect-square w-full rounded-lg object-cover"
        />
        <div className="w-full py-2 sm:py-4">
          <h3 className="mt-2 line-clamp-1 w-full text-start text-sm sm:text-lg lg:text-xl">
            {name}
          </h3>
        </div>
      </button>
    </>
  );
};

export default Card;
