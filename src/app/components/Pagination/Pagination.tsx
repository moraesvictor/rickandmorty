import clsx from "clsx";
import arrow from "../../../../public/arrow.svg"
import doubleArrow from "../../../../public/double_arrow.svg"

import Image from "next/image";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
  className?: string;
};

export const Pagination = ({
  totalPages,
  onChangePage,
  currentPage,
  className
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
    <footer className={clsx("flex w-[85vw] justify-center items-center", className)}>
      <button onClick={() => onChangePage(1)} className="mr-2">
        <Image className="rotate-180" alt='double-arrow-right' width={22} src={doubleArrow} />
      </button>
      <button
        onClick={() => onChangePage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="min-w-[24px] mr-1 p-2 rounded-md"
      >
        <Image className="rotate-180" src={arrow} alt="arrow-left" width={22} />
      </button>

      {pages.map((page) => (
        <button
          onClick={() => onChangePage(page)}
          key={page}
          className={clsx("border-2 border-[#42b4ca] mr-1 p-2 rounded-[50%] h-9 w-9 flex items-center justify-center", {
            "bg-[#bfde42] text-gray-800 border-none": currentPage === page,
          })}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onChangePage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="min-w-[24px] ml-2"
      >
        <Image src={arrow} alt="arrow-right" width={22} />
      </button>
      <button onClick={() => onChangePage(totalPages)} className="ml-3">
        <Image alt='double-arrow-right' width={22} src={doubleArrow} />
      </button>
    </footer>
  );
};
