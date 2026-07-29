export const QUERY_KEYS = {
  auth: {
    all: ["auth"] as const,
  },

  users: {
    all: ["users"] as const,

    list: (
      search: string,
      page: number,
      limit: number,
      sortBy: string,
      order: "asc" | "desc",
      role?: string,
    ) =>
      [
        "users",
        {
          search,
          page,
          limit,
          sortBy,
          order,
          role,
        },
      ] as const,

    detail: (id: number) =>
      ["users", id] as const,
  },
};