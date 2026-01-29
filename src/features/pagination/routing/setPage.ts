export const setPage = (
  searchParams: URLSearchParams,
  setSearchParams: (next: URLSearchParams) => void,
  page: number,
) => {
  const next = new URLSearchParams(searchParams);
  next.set("page", String(page));
  setSearchParams(next);
};
