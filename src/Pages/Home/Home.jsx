import Sidebar from "../../Sidebar/Sidebar";
import Feed from "../../Feed/Feed";
import "./Home.css";
import FilterButtons from "../../FilterButtons/FilterButtons";
import { useState } from "react";
import { fetchProducts } from "../../store/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [activeeCategory, setactiveeCategory] = useState("");
  const [filter, setFilter] = useState("all");

  const handleCancelClick = () => {
    dispatch(fetchProducts()); // Fetch homepage data
    setactiveeCategory(""); // Reset category state
  };

  const { sidebar } = useSelector((store) => store.toggle);

  return (
    <div className="home d-flex">
      <div className={`side-bar ${sidebar ? "sidebar" : ""}`}>
        <Sidebar
          activeeCategory={activeeCategory}
          setactiveeCategory={setactiveeCategory}
          handleCancelClick={handleCancelClick}
        />
      </div>
      <div className="main-content">
        <FilterButtons
          handleCancelClick={handleCancelClick}
          activeeCategory={activeeCategory}
          onFilterChange={setFilter}
        />
        <Feed filter={filter} />

        {/* Show Pagination only when not in a category */}
        {!activeeCategory && <Pagination />}
      </div>
    </div>
  );
};

export default Home;
