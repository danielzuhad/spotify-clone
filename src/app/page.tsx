import { getServerSession } from "next-auth/next";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import session from "redux-persist/lib/storage/session";

const Home = async () => {
  const session = await getServerSession(authOptions);

  console.log({ session });

  return (
    <>
      <div>
        Home
        {session ? "Session available" : "Session not available"}
      </div>
    </>
  );
};

export default Home;
