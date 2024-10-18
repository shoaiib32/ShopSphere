import React, { useState } from "react";
import "./Sidebar.css"; // Import custom CSS for styling

const Sidebar = ({ active }) => {
  const [category, setCategory] = useState(undefined);

  return (
    <div className={`custom-sidebar ${active ? "sidebar" : ""}`}>
      <div className="mt-4">
        <h1 className="side-heading fw-bold text-center">Categories</h1>
        <ul className="list-unstyled mt-2 text-center">
          <li
            className={`category-item ${category === "tv" ? "active" : ""}`}
            onClick={() => setCategory("tv")}
          >
            <a href="#">Tv</a>
          </li>
          <li
            className={`category-item ${category === "audio" ? "active" : ""}`}
            onClick={() => setCategory("audio")}
          >
            <a href="#">Audio</a>
          </li>
          <li
            className={`category-item ${category === "laptop" ? "active" : ""}`}
            onClick={() => setCategory("laptop")}
          >
            <a href="#">Laptop</a>
          </li>
          <li
            className={`category-item ${category === "mobile" ? "active" : ""}`}
            onClick={() => setCategory("mobile")}
          >
            <a href="#">Mobile</a>
          </li>
          <li
            className={`category-item ${category === "gaming" ? "active" : ""}`}
            onClick={() => setCategory("gaming")}
          >
            <a href="#">Gaming</a>
          </li>
          <li
            className={`category-item ${category === "application" ? "active" : ""}`}
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
