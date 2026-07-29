export interface UserQueryParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: "firstName" | "age" | "email";
  order?: "asc" | "desc";
}