import { Pagination } from "../model/types";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 12;

export const parsePagination = (params: URLSearchParams): Pagination => {
  const page = Number(params.get("page"));
  const limit = Number(params.get("limit"));

  return {
    page: Number.isFinite(page) && page > 0 ? page : DEFAULT_PAGE,
    limit: Number.isFinite(limit) && limit > 0 ? limit : DEFAULT_LIMIT,
  };
};
