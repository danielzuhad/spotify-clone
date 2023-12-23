import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div>{params.id}</div>
    </>
  );
};

export default page;
