import Sidebar from "../../Sidebar/Sidebar";
import Feed from "../../Feed/Feed";
import "./Home.css";
import FilterButtons from "../../FilterButtons/FilterButtons";
import { useState } from "react";
import { fetchProducts } from "../../store/itemSlice";
import { useDispatch } from "react-redux";
import SingleProduct from "../../SingleProuduct/SingleProduct";

const Home = ({ sidebar }) => {
  const dispatch = useDispatch();

  const [activeeCategory, setactiveeCategory] = useState("");

  const handleCancelClick = () => {
    dispatch(fetchProducts()); 
    setactiveeCategory(""); 
  };

  return (
    <div className="home d-flex  ">
      <div className={`side-bar ${sidebar ? "sidebar" : ""}`} >
      <Sidebar activeeCategory={activeeCategory} setactiveeCategory={setactiveeCategory} handleCancelClick={handleCancelClick}/>
      </div>
      <div className="main-content ">
        <FilterButtons handleCancelClick={handleCancelClick} activeeCategory={activeeCategory}/>
        <SingleProduct/>
      <Feed />
      </div>
    </div>
  );
};

export default Home;
