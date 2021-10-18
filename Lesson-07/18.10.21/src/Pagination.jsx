import React from 'react';

const Pagination = ({ pageNumber, handlePrev, handleNext, usersCount, usersPerPage }) => {
  const isPrevDisable = pageNumber > 1;

  return (
    <div className="pagination">
      <button onClick={handlePrev} className="btn" disabled={!isPrevDisable}>
        {isPrevDisable && '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button onClick={handleNext} className="btn">
        →
      </button>
    </div>
  );
};

export default Pagination;
