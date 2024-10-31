import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Pagination.css";
import { useDispatch } from "react-redux";
import {setPage } from "../store/pagination";

const Pagination = () => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);

  const handleChangePage = (pageNumber) => {
    dispatch(setPage(pageNumber));
    setPagination(pageNumber);
  };

  const handleNext = () => {
    if (pagination < 5) {
      handleChangePage(pagination + 1);
    }
  };

  const handlePrevious = () => {
    if (pagination > 1) {
      handleChangePage(pagination - 1);
    }
  };

  return (
    <center>
      <hr className="w-75 mt-4" />

      <div className="pagination-buttons d-flex justify-content-center gap-5">
        {pagination > 1 && (
          <button
            className="p-2 rounded bg-red"
            onClick={handlePrevious}
          >
            <IoIosArrowBack /> Previous
          </button>
        )}

        <div className="five-buttons d-flex gap-1">
          <button className={`${pagination === 1 ? "activePagination" : ""}`} onClick={() => handleChangePage(1)}>1</button>
          <button className={`${pagination === 2 ? "activePagination" : ""}`} onClick={() => handleChangePage(2)}>2</button>
          <button className={`${pagination === 3 ? "activePagination" : ""}`} onClick={() => handleChangePage(3)}>3</button>
          <button className={`${pagination === 4 ? "activePagination" : ""}`} onClick={() => handleChangePage(4)}>4</button>
          <button className={`${pagination === 5 ? "activePagination" : ""}`} onClick={() => handleChangePage(5)}>5</button>
        </div>

        {pagination < 5 && (
          <button
            className="p-2 rounded"
            onClick={handleNext}
          >
            Next <IoIosArrowForward />
          </button>
        )}
      </div>
    </center>
  );
};

export default Pagination;
