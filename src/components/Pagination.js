import React from "react";
import "./components.css";

const Pagination = ({
  totalPages,
  page,
  setPage,
}) => {

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
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
            {hideNextButton()}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
