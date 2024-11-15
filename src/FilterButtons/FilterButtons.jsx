import React, { useState } from 'react';
import './FilterButtons.css';

const FilterButtons = ({ handleCancelClick, activeeCategory, setFilter }) => {
  const [button, setButton] = useState("all");

  const handleButtonClick = (filter) => {
    setButton(filter);
    setFilter(filter); 
  };

  return (
    <div className='container-fluid mt-4'>
      <div className="container">
        <div className="button-container d-flex gap-2">
          <button
            className={`button ${button === "all" ? "active" : ""}`}
            onClick={() => handleButtonClick("all")}
          >
            All
          </button>
          <button
            className={`button ${button === "popular" ? "active" : ""}`}
            onClick={() => handleButtonClick("popular")}
          >
            Popular
          </button>
          <button
            className={`button ${button === "cheap" ? "active" : ""}`}
            onClick={() => handleButtonClick("cheap")}
          >
            Cheap
          </button>
          <button
            className={`button ${button === "expensive" ? "active" : ""}`}
            onClick={() => handleButtonClick("expensive")}
          >
            Expensive
          </button>
          <button
            className={`button ${button === "sale" ? "active" : ""}`}
            onClick={() => handleButtonClick("sale")}
          >
            Sale
          </button>
        </div>
        {activeeCategory ? (
          <button className="cancel-button px-2 border-0  bg-white mt-3  shadow text-capitalize">
            {activeeCategory}   <span onClick={handleCancelClick}><img src="cart_cross_icon.png" alt="" /></span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default FilterButtons;
