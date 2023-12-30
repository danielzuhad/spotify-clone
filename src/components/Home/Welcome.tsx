import { SessionType } from "@/type";
import React from "react";

const Welcome = ({ user }: SessionType) => {
  return (
    <>
      <h1 className="flex w-full gap-5 py-10 text-[30px]  font-bold  text-primary-default    sm:text-[50px] md:text-[64px]">
        <h1 className="font-normal">Welcome, </h1>
        {user.name}
      </h1>
    </>
  );
};

export default Welcome;
