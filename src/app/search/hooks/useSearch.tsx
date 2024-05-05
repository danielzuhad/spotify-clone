import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { SEARCH_PARAMS } from "../contants";
import { axiosInstance } from "@/lib/spotify-api";
import { SessionType } from "@/type";

type useSearchProps = {
  session: SessionType | null;
};

const useSearch = ({ session }: useSearchProps) => {
  const [searchParam, setSearchParam] = useState(SEARCH_PARAMS);
  const [search, setSearch] = React.useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  const getSearch = useQuery({
    queryKey: ["search", debouncedSearch],

    queryFn: async () => {
      if (!debouncedSearch) return;
      const response = await axiosInstance.get("/search", {
        params: {
          ...searchParam,
          q: debouncedSearch,
        },

        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      });

      return response;
    },

    refetchOnWindowFocus: false,
  });

  return {
    getSearch,
    search,
    setSearch,
    debouncedSearch,
  };
};

export default useSearch;
