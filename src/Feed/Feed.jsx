import React, { useEffect, useState } from "react";
import "./Feed.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/itemSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      setData(products);
    } else {
      setData([]);
    }
  }, [products]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="items mt-3 gap-4">
          {data.map((d, i) => (
            <div
              className="cardd d-flex flex-column justify-content-between"
              key={i}
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
