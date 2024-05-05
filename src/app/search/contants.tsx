type SearchParamsProps = {
  q: string;
  type: string;
  market: string;
  limit: number;
  offset: number;
};

export const SEARCH_PARAMS: SearchParamsProps = {
  q: "",
  market: "ES",
  limit: 20,
  offset: 0,
  type: "track",
};
