import React from "react";
import "./components.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  totalPages,
  paginate,
  page,
  setPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function nextPage() {
    setPage(page + 1)
  }

  function prevPage() {
    setPage(page - 1)
  }

  return (
    <div className="pagination-btns">
      <div className="flex-pag">
        <span>
          Showing page {page} of {totalPages} pages
        </span>
        <div className="btn-container">
            <button onClick={prevPage} className="prev pagination">Prev</button>
            {pageNumbers.slice(page -1, page + 9).map((number) => (
              <button
                className="pagination"
                onClick={() => paginate(number)}
                key={number}
              >
                {number}
              </button>
            ))}
            <button onClick={nextPage} className="next pagination">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
