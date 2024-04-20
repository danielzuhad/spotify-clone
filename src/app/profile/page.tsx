import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <>
      <div className="w-full">profile</div>
    </>
  );
};

export default Profile;
