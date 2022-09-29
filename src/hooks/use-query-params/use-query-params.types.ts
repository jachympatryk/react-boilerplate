import queryString from "query-string";

import { Nullable } from "types";

type QueryParam = string | number | boolean | null | undefined;
export type QueryParams = Record<string, QueryParam | QueryParam[]>;

export type QueryParamsReturn<Query extends QueryParams> = {
  query: string;
  parsedQuery: queryString.ParsedQuery<string>;
  setQueryParam: <Param extends keyof Query>(param: Param, value: Nullable<Query[Param]>) => void;
  setQueryParams: (params: Query) => void;
  deleteQueryParam: <Param extends keyof Query>(paramToRemove: Param) => void;
};
