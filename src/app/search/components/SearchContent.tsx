"use client";

import { SessionType } from "@/type";
import useSearch from "../hooks/useSearch";
import SearchBar from "./SearchBar";
import LoadingContent from "./LoadingContent";
import SearchResult from "./SearchResult";

type SearchContentProps = {
  session: SessionType | null;
};

const SearchContent = ({ session }: SearchContentProps) => {
  const { setSearch, debouncedSearch, getSearch } = useSearch({ session });

  const dataSearch = getSearch.data?.data.tracks.items;

  return (
    <>
      <div className="mt-10 flex w-full flex-col justify-center lg:w-[80%] xl:w-[70%]">
        <SearchBar setSearch={setSearch} />

        {getSearch.isLoading ? (
          <LoadingContent />
        ) : (
          dataSearch && <SearchResult items={dataSearch} />
        )}
      </div>
    </>
  );
};

export default SearchContent;
