import { SessionType } from "@/type";
import React from "react";

const Welcome = ({ user }: SessionType) => {
  return (
    <>
      <h1 className=" w-full py-10 pb-12 text-[30px]  font-semibold  sm:mt-11 sm:text-[50px] md:text-[64px]">
        Welcome {user.name}
      </h1>
    </>
  );
};

export default Welcome;
