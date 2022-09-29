import { useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useDidMount, useDidUpdate } from "@better-typed/react-lifecycle-hooks";

import { options } from "./use-query-params.utils";
import { isEmptyObject } from "utils";
import { Nullable } from "types";
import { QueryParamsReturn, QueryParams } from "./use-query-params.types";

export const useQueryParams = <Query extends QueryParams>(possibleQueries?: Query): QueryParamsReturn<Query> => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentQueries = (queryString.parse(location.search) || possibleQueries) as Query;

  const [query, setQuery] = useState<Query>(currentQueries);

  const updateQueryParams = (queryParams: QueryParams) => {
    const stringifiedQueries = queryString.stringify(queryParams, options);

    navigate(`${location.pathname}?${stringifiedQueries}`, { replace: true });
  };

  useDidMount(() => {
    if (possibleQueries && !isEmptyObject(possibleQueries)) {
      updateQueryParams(possibleQueries);
      setQuery(possibleQueries);
    }
  });

  useDidUpdate(
    () => {
      const queries = queryString.parse(location.search) as Query;
      setQuery(queries);
    },
    [location.search],
    true,
  );

  const setQueryParam = <Param extends keyof Query>(param: Param, value: Nullable<Query[Param]>) => {
    const newQueries: QueryParams = { ...query, param: value };

    updateQueryParams(newQueries);
  };

  const setQueryParams = (queryParams: Query) => {
    const newQueries: QueryParams = { ...queryParams };

    updateQueryParams(newQueries);
  };

  const deleteQueryParam = <Param extends keyof Query>(queryToRemove: Param) => {
    const queries = { ...query };
    delete queries[queryToRemove];
    setQuery(queries);

    updateQueryParams(queries);
  };

  const parsedQuery = queryString.parse(location.search);

  return {
    query: location.search,
    parsedQuery,
    setQueryParam,
    setQueryParams,
    deleteQueryParam,
  };
};
