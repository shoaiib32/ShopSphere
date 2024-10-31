import React, { useEffect, useState } from "react";
import "./Feed.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSelectedProduct } from "../store/itemSlice";
import { toggleAction } from "../store/toggle";

const Feed = ({ filter }) => {
  const { page } = useSelector((store) => store.pagination);  // Get current page from Redux
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let filteredData = [...products];

    switch (filter) {
      case "popular":
        filteredData = products.filter((product) => product.popular);
        break;
      case "cheap":
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        filteredData.sort((a, b) => b.price - a.price);
        break;
      case "sale":
        filteredData = products.filter((product) => product.discount > 0);
        break;
      default:
        break;
    }

    // Calculate the range based on the current page
    const itemsPerPage = 30;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(filteredData.slice(startIndex, endIndex));
  }, [products, filter, page]);  // Update displayed data when page changes

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(toggleAction.toggleSingleProduct());
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="items mt-3 gap-4">
          {data.map((d, i) => (
            <div
              className="cardd d-flex flex-column justify-content-between cursor-pointer"
              key={i}
              onClick={() => handleProductClick(d)}
            >
              <div className="image shadow-sm bg-white rounded d-flex align-items-center w-100 h-100">
                <img
                  src={d.image}
                  alt=""
                  className="img-fluid object-fit-contain w-100 h-100"
                />
              </div>
              <div className="content m-0 mt-2 w-100 pl-2 d-flex flex-column">
                <h6 className="fw-500 m-0 text-truncate w-100 d-block">
                  {d.title}
                </h6>
                <div className="price d-flex gap-2 align-items-center">
                  {d.discount ? (
                    <>
                      <p className="text-decoration-line-through m-0 opacity-50">
                        ${d.price}
                      </p>
                      <h4 className="m-0">
                        <span className="dollar">$</span>
                        {Math.floor(d.price - (d.price * d.discount) / 100)}
                      </h4>
                      <p className="m-0 d-flex align-items-center">
                        <span className="discount d-flex text-light justify-content-center align-items-center">
                          {d.discount}%
                        </span>
                        &nbsp;off
                      </p>
                    </>
                  ) : (
                    <h4 className="m-0">
                      <span className="dollar">$</span>
                      {d.price}
                    </h4>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
