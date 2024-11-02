import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { clearSelectedProduct } from '../store/itemSlice';
import "./SingleProduct.css";
import { bagAction } from '../store/bag';
import { toggleAction } from '../store/toggle';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const product = useSelector((store) => store.products.selectedProduct);
    const cart = useSelector((store) => store.bag);

    const [inCart, setInCart] = useState(false);
    const quantity = cart[product?.id] || 0;

    useEffect(() => {
        setInCart(quantity > 0);
    }, [quantity]);

    const handleAddToCart = (id) => {
        dispatch(bagAction.addToCart({ id }));
    };

    const closePopup = () => {
        dispatch(toggleAction.toggleSingleProduct());
        dispatch(clearSelectedProduct());
    };

    if (!product) return null;

    return (
        <div className="firstt-container position-absolute z-1 w-100 d-xxl-flex justify-content-center align-items-center">
            <div className="d-flex p-5 pb-0 align-items-center flex-column flex-xxl-row bg-white position-relative secondd-container">
                <span className="position-absolute top-0 end-0 mt-3 me-3 rounded-1 px-1 cros" onClick={closePopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-100 h-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <img
                    src={product.image}
                    className="w-50 h-auto object-fit-contain me-auto flex-grow-1 customImg"
                    draggable="false"
                    alt={product.title}
                />
                <div className="content-container px-xxl-4 py-4">
                    <span className="text-truncate-3 fw-bold title">{product.title}</span>
                    <div className="d-flex gap-2 mt-4">
                        <div>
                            {product.discount ? (
                                <>
                                    <span className="text-lg text-decoration-line-through text-secondary pe-2">${product.price}</span>
                                    <span className="fs-3 fw-medium">
                                        <span className="text-success">$</span>
                                        {Math.floor(product.price - (product.price * product.discount) / 100)}
                                    </span>
                                </>
                            ) : (
                                <span className="fs-3 fw-medium">${product.price}</span>
                            )}
                        </div>
                        {product.discount && (
                            <div className="d-flex align-items-center gap-1">
                                <span className="discount pl-1 bg-danger text-white d-flex align-items-center justify-content-center">
                                    {product.discount}%
                                </span>
                                <span className="fw-medium text-secondary">off</span>
                            </div>
                        )}
                    </div>
                    <div className="d-flex gap-3 mt-3">
                        <div className="d-flex flex-column product-info">
                            <span className="fw-bold">Brand:</span>
                            <span className="fw-bold">Model:</span>
                            <span className="fw-bold">Color:</span>
                        </div>
                        <div className="d-flex flex-column product-info">
                            <span>{product.brand}</span>
                            <span>{product.model}</span>
                            <span>{product.color}</span>
                        </div>
                    </div>
                    <div>
                        <h6 className="fw-bold mt-3">About this product:</h6>
                        <span className="description">{product.description}</span>
                    </div>
                    <div className="parent-btn mt-3">
                        {quantity === 0 ? (
                            <button 
                                className="w-100 h-100 d-flex justify-content-center align-items-center gap-2 buttonn border-0 py-1 text-white"
                                onClick={() => handleAddToCart(product.id)}
                            >
                                <HiOutlineShoppingBag className="bag-icon" /> <span className="text-nowrap">Add to Cart</span>
                            </button>
                        ) : (
                            <Link className='text-decoration-none' to="/cart" onClick={closePopup}>
                                <button 
                                    className="w-100 h-100 d-flex justify-content-center align-items-center gap-2 buttonn border-0 py-1 bg-danger text-white"
                                >
                                    <HiOutlineShoppingBag className="bag-icon" /> <span className="text-nowrap">Go to Cart</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
