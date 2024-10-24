import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Navbar/Navbar";
import SingleProduct from './SingleProuduct/SingleProduct'
import { useSelector } from "react-redux";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

const {singleProduct} = useSelector((store)=> store.products)
console.log(singleProduct);


  return (<>

    <div className={`singleProduct position-fixed ${singleProduct ?"":"disable"}`}>
    <SingleProduct/>
    </div>
    <div>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />

      <Home sidebar={sidebar} />
    </div>
      </>
  );
};

export default App;
