import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useState } from 'react';
import { useDidUpdate } from '@better-typed/react-lifecycle-hooks';

import { Nullable } from 'types';

type QueryValues = string | number | boolean | null | undefined;
type Queries = Record<string, QueryValues | QueryValues[]>;

const options: queryString.StringifyOptions = {
  arrayFormat: 'comma',
  skipEmptyString: true,
};

export const useQueryParams = <Q extends Queries>(possibleQueries?: Q) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentQueries = (queryString.parse(location.search) || possibleQueries) as Q;

  const [query, setQuery] = useState<Q>(currentQueries);

  useDidUpdate(() => {
    const queries = queryString.parse(location.search);
    setQuery((prevQuery) => ({ ...prevQuery, ...queries }));
  }, [location.search]);

  const setParam = <P extends keyof Q>(param: P, value: Nullable<Q[P]>) => {
    const newQueries: Queries = { ...query, param: value };

    const stringifiedQueries = queryString.stringify(newQueries, options);

    navigate(`${location.pathname}?${stringifiedQueries}`, { replace: true });
  };

  const setParams = (queries: Q) => {
    const newQueries: Queries = { ...queries };

    const stringifiedQueries = queryString.stringify(newQueries, options);

    navigate(`${location.pathname}?${stringifiedQueries}`, { replace: true });
  };

  const deleteQuery = <Query extends keyof Q>(queryToRemove: Query) => {
    const queries = { ...query };
    delete queries[queryToRemove];
    setQuery(queries);

    const stringifiedQueries = queryString.stringify(queries, options);

    navigate(`${location.pathname}?${stringifiedQueries}`);
  };

  return {
    setParam,
    setParams,
    deleteQuery,
  };
};
