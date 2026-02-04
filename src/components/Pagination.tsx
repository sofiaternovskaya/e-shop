import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type TProps = {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, total, onPageChange }: TProps) => {
  if (total < 2) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-between rounded-md shadow-xs border border-gray-300"
    >
      <button
        disabled={page < 2}
        onClick={() => onPageChange(page - 1)}
        className="p-2 rounded-md hover:bg-gray-200 hover:cursor-pointer hover:disabled:bg-white hover:disabled:cursor-auto disabled:text-gray-300"
      >
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        disabled={page > total - 1}
        onClick={() => onPageChange(page + 1)}
        className="p-2 rounded-md hover:bg-gray-200 hover:cursor-pointer hover:disabled:bg-white hover:disabled:cursor-auto disabled:text-gray-300"
      >
        <ChevronRightIcon aria-hidden="true" className="size-5" />
      </button>
    </nav>
  );
};
