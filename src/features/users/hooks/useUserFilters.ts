import { useSearchParams } from "react-router-dom";

import type { UserQueryParams } from "../types/userQueryParams";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

export const useUserFilters = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const filters: UserQueryParams = {
    page: Number(
      searchParams.get("page") ?? DEFAULT_PAGE,
    ),
    limit: Number(
      searchParams.get("limit") ?? DEFAULT_LIMIT,
    ),
  };

  const setPage = (page: number) => {
    const params = new URLSearchParams(
      searchParams,
    );

    params.set("page", page.toString());

    setSearchParams(params);
  };

  return {
    filters,
    setPage,
  };
};