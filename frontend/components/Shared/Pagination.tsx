import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event: any) => {
    const action = event.target.innerText;
    if (action === "PREV" && currentPage > 1) {
      onPageChange(currentPage - 1);
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === "NEXT" && currentPage !== totalPages) {
      onPageChange(currentPage + 1)
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }
  return (
    <div className='flex items-center justify-center gap-4 pt-10'>
      <button
        onClick={handleChange}
        className='btn btn-black text-white btn-sm'
      >
        PREV
      </button>
      <p>Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong></p>
      <button
        onClick={handleChange}
        className='btn btn-black text-white btn-sm'
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
