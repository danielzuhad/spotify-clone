import { wait } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Search = async () => {
  const session = await getServerSession(authOptions);

  const data = await wait(1000);

  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <>
      <div>Seaerch</div>
    </>
  );
};

export default Search;
