import { getServerSession } from "next-auth/next";
import Welcome from "@/components/Home/Header/Welcome";
import { SessionType } from "@/type";
import LoadingSection from "@/components/Loading/LoadingSection";
import TemplateWrapper from "../provider/TemplateWrapper";
import Album from "@/components/Home/Album/Album";
import { authOptions } from "./api/auth/[...nextauth]/options";

const Home = async () => {
  const session: SessionType | null = await getServerSession(authOptions);

  return (
    <>
      <TemplateWrapper className=" w-full">
        {session && <Welcome user={session.user} />}
        {session ? (
          <Album accessToken={session?.user?.accessToken} />
        ) : (
          <LoadingSection />
        )}
      </TemplateWrapper>
    </>
  );
};

export default Home;
