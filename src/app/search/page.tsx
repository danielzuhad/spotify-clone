import TemplateWrapper from "@/components/Layout/TemplateWrapper";
import Header from "./components/Header";
import SearchContent from "./components/SearchContent";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { SessionType } from "@/type";

const Search = async () => {
  const session: SessionType | null = await getServerSession(authOptions);

  return (
    <>
      <TemplateWrapper className="flex h-full w-full flex-col items-center overflow-y-auto">
        <Header />
        <SearchContent session={session} />
      </TemplateWrapper>
    </>
  );
};

export default Search;
