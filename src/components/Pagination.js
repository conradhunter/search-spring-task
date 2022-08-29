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


// Hide previous button if user is on the first page of content
  function hidePrevButtons() {
    if (page == 1) {
      return (
        <button disabled onClick={prevPage} className="prev pagination">Prev</button>
      )
    } else {
      return (
        <button onClick={prevPage} className="prev pagination">Prev</button>
      )
    }
  }

  // Hide next button if user is on the last page of content
  function hideNextButton() {
    if (page == totalPages) {
      return (
        <button disabled onClick={nextPage} className="next pagination">Next</button>
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
        <span className="pagination-results">
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
