import React, { useRef } from "react";
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

  function hidePrevButtons() {
    if (page == 1) {
      return (
        <button onClick={prevPage} className="prev pagination hidden">Prev</button>
      )
    } else {
      return (
        <button onClick={prevPage} className="prev pagination">Prev</button>
      )
    }
  }

  function hideNextButton() {
    if (page == totalPages) {
      return (
        <button onClick={nextPage} className="next pagination hidden">Next</button>
      ) 
    } else {
      return (
        <button onClick={nextPage} className="next pagination">Next</button>
      )
    }
  }

  return (
    <div className="pagination-btns">
      <div className="flex-pag">
        <span>
          Showing page {page} of {totalPages} pages
        </span>
        <div className="btn-container">
            {hidePrevButtons()}
            {pageNumbers.slice(page - 1, page + 8).map(number => (
              <button
                className="pagination"
                onClick={() => paginate(number)}
                key={number}
              >
                {number}
              </button>
            ))}
            {hideNextButton()}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
