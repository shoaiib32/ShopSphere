import React, { useState } from "react"; 
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/itemSlice"; 
import { resetPage } from "../store/pagination";


const Sidebar = ({activeeCategory , setactiveeCategory}) => {
  const dispatch = useDispatch();
  

  const handleCategoryClick = (category) => {
    dispatch(fetchProducts(category));
    dispatch(resetPage());
    setactiveeCategory(category); // Set the activee category
  };



  return (
    <div className="custom-sidebar">
      <div className="mt-4">
        <h1 className="side-heading fw-bold text-center">Categories</h1>
        <ul className="list-unstyled mt-2 text-center">
          {["tv", "audio", "laptop", "mobile", "gaming", "appliances"].map(
            (category,i) => (
              <li
                key={i}
                className={`category-item ${activeeCategory === category ? "activee" : ""}`} // Add activee class if the category is activee
                onClick={() => handleCategoryClick(category)}
              >
                <a href="#">{category}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
