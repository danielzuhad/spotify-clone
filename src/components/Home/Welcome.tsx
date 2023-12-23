import { SessionType } from "@/type";
import React from "react";

const Welcome = ({ user }: SessionType) => {
  return (
    <>
      <h1 className="my-5 w-full text-[30px]  font-semibold  sm:mt-11 md:text-[64px]">
        Welcome {user.name}
      </h1>
    </>
  );
};

export default Welcome;
