import clsx from "clsx";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

export const Pagination = ({
  totalPages,
  onChangePage,
  currentPage,
}: PaginationProps) => {
  const adjacentPages = () => {
    if (currentPage === 1) return 4;
    if (currentPage === 2) return 3;
    return 2;
  };
  const startPage = Math.max(1, currentPage - adjacentPages());
  const endPage = Math.min(totalPages, currentPage + adjacentPages());

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <footer className="flex w-[100vw] justify-center items-center">
      <button
        onClick={() => onChangePage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="border border-gray-600 min-w-[24px] mr-2 p-2 rounded-md"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          onClick={() => onChangePage(page)}
          key={page}
          className={clsx("border border-gray-600 min-w-[24px] mr-1 p-2", {
            "bg-sky-500": currentPage === page,
          })}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onChangePage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="border border-gray-600 min-w-[24px] ml-1 p-2 rounded-md"
      >
        Next
      </button>
    </footer>
  );
};
