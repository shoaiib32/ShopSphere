import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <header className="navbar container-fluid bg-white navbar-expand shadow-lg ">
        <div className="container-fluid mx-sm-3 mx-lg-5 row justify-content-between align-center">
          <div className="col-3 col-sm-2 d-flex align-items-center gap-3">
            <div className="hamburger">
              <HiOutlineMenuAlt2 />
            </div>
            <img src="logo.png" alt="" className="logo" />
          </div>

          <div className="input d-flex col-6 col-sm-7">
            <div className="icon rounded-start-4">
              <IoIosSearch className="search" />
            </div>
            <input
              type="text"
              placeholder="Search the Product"
              className="rounded-end-4 w-100 w-sm-50 w-lg-25"
            />
          </div>

          <div className="right-container col-3 col-sm-3 mr-md-4">
            <div className="d-flex justify-content-end gap-md-4 gap-2">
              <span>
                <CiBellOn />
              </span>
              <span>
                <LiaShoppingCartSolid />
              </span>
              <span>
                <GoPerson />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
