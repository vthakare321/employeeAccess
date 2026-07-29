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
    search: searchParams.get("search") ?? "",
    sortBy:
    (searchParams.get("sortBy") as
      | "firstName"
      | "age"
      | "email") ?? "firstName",
  order:
    (searchParams.get("order") as
      | "asc"
      | "desc") ?? "asc",
  };

  const setPage = (page: number) => {
    const params = new URLSearchParams(
      searchParams,
    );

    params.set("page", page.toString());

    setSearchParams(params);
  };

  const setSearch = (search: string) => {
  const params = new URLSearchParams(searchParams);

  if (search) {
    params.set("search", search);
  } else {
    params.delete("search");
  }

  params.set("page", "1");

  setSearchParams(params);
};

const setSorting = (
  sortBy: "firstName" | "age" | "email",
  order: "asc" | "desc",
) => {
  const params = new URLSearchParams(searchParams);

  params.set("sortBy", sortBy);
  params.set("order", order);
  params.set("page", "1");

  setSearchParams(params);
};

  return {
    filters,
    setPage,
    setSearch,
     setSorting,
  };
};