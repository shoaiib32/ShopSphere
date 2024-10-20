import React, { useState } from "react";
import "./Sidebar.css"; // Import custom CSS for styling

const Sidebar = ({ activee }) => {
  const [category, setCategory] = useState(undefined);


  return (
    <div className="custom-sidebar">
      <div className="mt-4">
        <h1 className="side-heading fw-bold text-center">Categories</h1>
        <ul className="list-unstyled mt-2 text-center">
          <li
            className={`category-item ${category === "tv" ? "activee" : ""}`}
            onClick={() => setCategory("tv")}
          >
            <a href="#">Tv</a>
          </li>
          <li
            className={`category-item ${category === "audio" ? "activee" : ""}`}
            onClick={() => setCategory("audio")}
          >
            <a href="#">Audio</a>
          </li>
          <li
            className={`category-item ${category === "laptop" ? "activee" : ""}`}
            onClick={() => setCategory("laptop")}
          >
            <a href="#">Laptop</a>
          </li>
          <li
            className={`category-item ${category === "mobile" ? "activee" : ""}`}
            onClick={() => setCategory("mobile")}
          >
            <a href="#">Mobile</a>
          </li>
          <li
            className={`category-item ${category === "gaming" ? "activee" : ""}`}
            onClick={() => setCategory("gaming")}
          >
            <a href="#">Gaming</a>
          </li>
          <li
            className={`category-item ${category === "application" ? "activee" : ""}`}
            onClick={() => setCategory("application")}
          >
            <a href="#">Appliances</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
