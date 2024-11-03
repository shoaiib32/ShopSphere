import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleAction } from "../store/toggle";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSidebar = () => {
    dispatch(toggleAction.toggleSidebar());
  };

  const cartItems = useSelector((store) => store.bag);
  const totalUniqueItems = Object.keys(cartItems).filter((id) => cartItems[id] > 0).length;

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleProductClick = () => {
    setSearchText(""); // Clear the search text to hide SearchBox
  };

  return (
    <>
      <header className="navbar container-fluid bg-white navbar-expand shadow-lg position-fixed z-1 w-100">
        <div className="container-fluid mx-sm-3 mx-lg-5 row justify-content-between align-center">
          <div className="col-3 col-sm-2 d-flex align-items-center gap-3">
            <div className="hamburger">
              <HiOutlineMenuAlt2 onClick={handleSidebar} />
            </div>
            <Link to="/">
              <img src="logo.png" alt="Logo" className="logo" />
            </Link>
          </div>

          <div className="input d-flex col-6 col-sm-7">
            <div className="icon rounded-start-4">
              <IoIosSearch className="search" />
            </div>
            <input
              type="text"
              placeholder="Search the Product"
              className="rounded-end-4 w-100 w-sm-50 w-lg-25"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>

          <div className="right-container col-3 col-sm-3 mr-md-4">
            <div className="d-flex justify-content-end gap-md-4 gap-2">
              <span><CiBellOn /></span>
              <Link to="/cart" className="text-reset cart-icon-container d-flex align-items-center">
                <LiaShoppingCartSolid className="cart-icon mt-2" />
                {totalUniqueItems > 0 && (
                  <span className="cart-count d-flex justify-content-center align-items-center position-absolute">
                    <span className="absoulte counter-number text-white">{totalUniqueItems}</span>
                  </span>
                )}
              </Link>
              <span><GoPerson /></span>
            </div>
          </div>
        </div>
      </header>
      
      {searchText.length > 0 && (
        <SearchBox searchText={searchText} onProductClick={handleProductClick} />
      )}
    </>
  );
};

export default Navbar;

