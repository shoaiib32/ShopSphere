import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaArrowLeftLong } from "react-icons/fa6";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/itemSlice";
import { bagAction } from "../../store/bag";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const cartItems = useSelector((store) => store.bag);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setData(products);
  }, [products]);

  const handleAddQuantity = (id) => {
    dispatch(bagAction.addToCart({ id }));
  };

  const handleRemoveQuantity = (id) => {
    dispatch(bagAction.removeFromBag({ id }));
  };

  const handleDeleteItem = (id) => {
    dispatch(bagAction.deleteFromCart({ id }));
  };

  const calculateTotals = () => {
    let totalPrice = 0;
    let totalDiscount = 0;

    data.forEach((product) => {
      const quantity = cartItems[product.id] || 0;
      const productTotal = product.price * quantity;
      totalPrice += productTotal;

      if (product.discount) {
        const discountAmount = (product.discount / 100) * productTotal;
        totalDiscount += discountAmount;
      }
    });

    return {
      totalPrice,
      totalDiscount,
      subtotal: totalPrice - totalDiscount,
    };
  };

  const { totalPrice, totalDiscount, subtotal } = calculateTotals();

  return (
    <div className="cart-container m-auto px-xxl-5">
      <div className="head-part p-4 pb-2">
        <div className="above-line d-flex flex-column flex-sm-row align-items-sm-end gap-1 bottom-0">
          <h1 className="m-0 fw-bold">Shopping Cart</h1>
          <p className="m-0 mb-1 fw-bold">({Object.keys(cartItems).length} items)</p>
        </div>
        <div className="below-line d-flex justify-content-end">
          <Link to="/">
            <button className="rounded bg-white py-2 px-2">
              <div className="d-flex align-items-center">
                <FaArrowLeftLong />
                <span className="d-none d-sm-block">&nbsp; Continue Shopping</span>
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="below-part d-flex flex-column flex-lg-row justify-content-lg-between gap-lg-4 m-auto w-100">
        <div className="d-flex flex-column gap-2 scroll">
          {data.map((d, i) => {
            const quantity = cartItems[d.id] || 0;
            if (quantity > 0) {
              return (
                <div
                  key={i}
                  className="item d-flex flex-column flex-md-row align-items-md-center shadow rounded gap-3 py-1 px-4 px-md-0"
                >
                  <div className="img-box">
                    <img src={d.image} alt={d.title} className="object-fit-contain w-100" />
                  </div>
                  <div className="card-content d-flex flex-column py-4 py-lg-5 px-0 pe-lg-4">
                    <h1 className="m-0 text-truncate">{d.title}</h1>
                    <p>Color: {d.color}</p>
                    <p>Price: ${d.price}</p>
                    <span className="text-success">In Stock</span>
                    <div className="quantity-container d-flex align-items-center gap-3">
                      <span>Qty:</span>
                      <div className="buttonContainer d-flex">
                        <button className="border-right" onClick={() => handleRemoveQuantity(d.id)}>
                          <FaMinus />
                        </button>
                        <button className="border-right px-2">{quantity}</button>
                        <button onClick={() => handleAddQuantity(d.id)}>
                          <FaPlus />
                        </button>
                      </div>
                      <span className="remove-btn" onClick={() => handleDeleteItem(d.id)}>
                        <BsTrash3 /> Remove
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Order Summary */}
        <div className="total mt-4">
          <h1 className="text-center">Order Summary</h1>
          <div className="line" />
          <div className="payment d-flex align-items-center my-2">
            <div className="left-side">
              <p>Price:</p>
              <p>Delivery:</p>
              <p>Discount:</p>
            </div>
            <div className="right-side m-auto">
              <p>${Math.round(totalPrice)}</p>
              <p className="text-success">Free</p>
              <p className="text-danger">-${Math.round(totalDiscount)}</p>
            </div>
          </div>
          <div className="line" />
          <div className="payment-total d-flex align-items-center mt-1">
            <div className="left-sidee">
              <h1>Subtotal</h1>
            </div>
            <div className="right-sidee m-auto">
              <h1>${Math.round(subtotal)}</h1>
            </div>
          </div>
          <button className="text-white rounded p-2 mt-1">Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
