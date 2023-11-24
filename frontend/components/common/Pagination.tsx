import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  onPageChange: (page: number) => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  setOffset,
  pageLimit,
}) => {
  const handleChange = (event: any) => {
    const action = event.target.innerText;
    if (action === "PREV" && currentPage > 1) {
      onPageChange(currentPage - 1);
      setOffset((prev) => prev - pageLimit);
    } else if (action === "NEXT" && currentPage !== totalPages) {
      onPageChange(currentPage + 1);
      setOffset((prev) => prev + pageLimit);
    }
  };
  return (
    <div className="flex items-center justify-center gap-4 pt-10">
      <button
        onClick={handleChange}
        className="btn btn-black text-white btn-sm"
      >
        PREV
      </button>
      <p>
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </p>
      <button
        onClick={handleChange}
        className="btn btn-black text-white btn-sm"
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
