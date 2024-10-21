import React, { useState } from 'react'
import './FilterButtons.css'

const FilterButtons = ({handleCancelClick ,activeeCategory}) => {
  const [button, setButton] = useState("all");
  return (
    <div className='container-fluid'>
      <div className="container">
      <div className="button-container d-flex gap-2">
          <button
            className={`button ${button === "all" ? "active" : ""}`}
            onClick={() => setButton("all")}
          >
            All
          </button>
          <button
            className={`button ${button === "popular" ? "active" : ""}`}
            onClick={() => setButton("popular")}
          >
            Popular
          </button>
          <button
            className={`button ${button === "cheap" ? "active" : ""}`}
            onClick={() => setButton("cheap")}
          >
            Cheap
          </button>
          <button
            className={`button ${button === "expensive" ? "active" : ""}`}
            onClick={() => setButton("expensive")}
          >
            Expensive
          </button>
          <button
            className={`button ${button === "sale" ? "active" : ""}`}
            onClick={() => setButton("sale")}
          >
            Sale
          </button>
        </div>
        {activeeCategory ? <button className="cancel-button px-2 border-0  bg-white mt-3  shadow text-capitalize">
          {activeeCategory}  <span onClick={handleCancelClick}><img src="cart_cross_icon.png" alt="" /></span>
        </button> :<></>}
      </div>
    </div>
  )
}

export default FilterButtons
