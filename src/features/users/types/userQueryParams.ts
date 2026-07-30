export interface UserQueryParams {
  page: number;
  limit: number;
  sortBy?: "firstName" | "age" | "email";
  order?: "asc" | "desc";
}