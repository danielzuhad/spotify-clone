import { PlaylistType } from "@/type";
import React from "react";

const Card = ({ name, images }: PlaylistType) => {
  const image = images?.[0]?.url;

  return (
    <>
      <div className="mb-7 h-[258px] w-[220px] bg-primary-default/20">
        {/* <img src={image} className="h-10 w-10" />
        <h3>{name}</h3> */}
      </div>
    </>
  );
};

export default Card;
