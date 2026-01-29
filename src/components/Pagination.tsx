type TProps = {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, total, onPageChange }: TProps) => {
  if (total === 0) {
    return null;
  }

  return (
    <div>
      <nav aria-label="Pagination">
        {page > 1 && (
          <button onClick={() => onPageChange(page - 1)}>Prev</button>
        )}
        {page < total && (
          <button onClick={() => onPageChange(page + 1)}>Next</button>
        )}
      </nav>
    </div>
  );
};
