import React, { useEffect, useState } from "react";
import "./Feed.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/itemSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  const [button, setButton] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setData(products);
      console.log(data);
    } else {
      setData([]);
    }
  }, [products]);

  return (
    <div className="container-fluid">
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

        {/* new  */}
        <div className="items mt-3 gap-4"> 
          {/* row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 gx-5 gy-5  */}
        {data.map((d, i) => {
          return (
            <div className="cardd d-flex flex-column justify-content-between" key={i} >
              <div className="image shadow-sm   bg-white rounded d-flex  align-items-center w-100 h-100">
                <img src={d.image} alt="" className="img-fluid object-fit-contain w-100 h-100" />
              </div>
             
              <div className="content m-0 mt-2 w-100 pl-2 d-flex flex-column">
                <h6 className="fw-500 m-0 text-truncate w-100 d-block">{d.title}</h6>
                <div className="price d-flex gap-2 align-items-center">
                  <p className="text-decoration-line-through m-0 opacity-50">
                    {d.price}
                  </p>
                  <h4 className="m-0">
                    <span className="dollar">$</span>661
                  </h4>
                  <p className="m-0 d-flex align-items-center">
                    <span className="discount d-flex text-light justify-content-center align-items-center">
                      4%
                    </span>
                    &nbsp;off
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
