import React from "react";
import "./components.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  totalPages,
  paginate,
  page,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-btns">
      <div className="flex-pag">
        <span>
          Showing page {page} of {totalPages} pages
        </span>
        <div>
        <button className="prev pagination">Prev</button>
          {pageNumbers.slice({page}, 10).map((number) => (
            <button
              className="pagination"
              onClick={() => paginate(number)}
              key={number}
            >
              {number}
            </button>
          ))}
          <button className="next pagination">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
