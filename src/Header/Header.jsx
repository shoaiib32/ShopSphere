import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFourProducts, setSelectedProduct } from "../store/itemSlice";
import { toggleAction } from "../store/toggle";

const Header = () => {
  const dispatch = useDispatch();

  // Access the fetched four products from the Redux store
  const { fetchFourProducts: fetchedProducts } = useSelector((store) => store.products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch the four products when the component mounts
  useEffect(() => {
    dispatch(fetchFourProducts());
  }, [dispatch]);

  // Filter products once they are fetched
  useEffect(() => {
    if (fetchedProducts.length > 0) {
      const selectedProducts = fetchedProducts.filter((product) =>
        [23, 25, 30, 35].includes(product.id)
      );
      setFilteredProducts(selectedProducts);
    }
  }, [fetchedProducts]);

  // Handle product click
  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product)); // Set selected product in the store
    dispatch(toggleAction.toggleSingleProduct()); // Toggle single product view
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h6 className="sale">HOT SALE</h6>
        <div className="row gap-3">
          <div className="col-12 col-md-6 col-xl-5">
            {/* Carousel */}
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img
                    src="secondSlide.avif"
                    className="d-block w-100"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="thirdSlide.avif"
                    className="d-block w-100"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="fourthSlide.avif"
                    className="d-block w-100"
                    alt="Fourth slide"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-5 col-xl-5 d-none d-md-block">
            <div className="row">
              {filteredProducts.map((product) => {
                const discountedPrice = Math.floor(
                  product.price - (product.price * product.discount) / 100
                );
                return (
                  <div
                    key={product.id}
                    className="header-product col-6 d-flex flex-column flex-xl-row align-items-center gap-2 p-0 mt-2"
                    onClick={() => handleProductClick(product)} // Add click handler
                  >
                    <div className="img-div">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-fit-contain rounded shadow"
                      />
                    </div>
                    <div className="content-div d-flex flex-column gap-1 py-2">
                      <p className="text-truncate-2 fw-medium m-0">{product.title}</p>
                      <div className="d-flex gap-2 gap-xl-0 flex-xl-column">
                        <div className="pricing d-flex gap-2 m-0">
                          <p className="text-decoration-line-through m-0">${product.price}</p>
                          <h6 className="d-flex m-0">
                            <span className="dollar-sign">$</span> {discountedPrice}
                          </h6>
                        </div>
                        <div className="item-discount">
                          <p className="m-0 d-flex align-items-center fw-medium gap-1">
                            <span className="discount d-flex text-light justify-content-center align-items-center">
                              {product.discount}%
                            </span>
                            &nbsp;off
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 col-xl-1 brand-container">
            <div className="vertical-line me-3"></div>
            <p className="brand-heading mb-2">BEST SELLERS</p>
            <div className="d-flex flex-xl-column gap-4 gap-xl-2 ">
              <div className="d-flex flex-column flex-xl-row gap-1 gap-xl-2 align-items-center">
                <div className="brand-img rounded bg-dark">
                  <img
                    src="apple.jpg"
                    alt=""
                    className="object-fit-contain h-100  rounded"
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <h6 className="brand-name m-0">Apple</h6>
                  <button className="brand-btn rounded d-none d-xl-block">98%</button>
                </div>
              </div>

              <div className="d-flex flex-column flex-xl-row gap-1 gap-xl-2 align-items-center">
                <div className="brand-img rounded bg-primary">
                  <img
                    src="sony.png"
                    alt=""
                    className="object-fit-contain rounded h-100 "
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <h6 className="brand-name m-0">Sony</h6>
                  <button className="brand-btn rounded d-none d-xl-block">96%</button>
                </div>
              </div>

              <div className="d-flex flex-column flex-xl-row gap-1 gap-xl-2 align-items-center">
                <div className="brand-img rounded mi">
                  <img
                    src="mi.png"
                    alt=""
                    className="object-fit-contain rounded h-100 "
                  />
                </div>
                <div className="d-flex flex-column gap-1">
                  <h6 className="brand-name m-0">Xiaomi</h6>
                  <button className="brand-btn rounded d-none d-xl-block">91%</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
