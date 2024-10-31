import Home from "./Pages/Home/Home";
import Navbar from "./Navbar/Navbar";
import SingleProduct from './SingleProuduct/SingleProduct'
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const App = () => {

const {singleProduct} = useSelector((store)=> store.toggle)



  return (<>

    <div className={`singleProduct position-fixed ${singleProduct?"":"disable"}`}>
    <SingleProduct/>
    </div>
    <Navbar/>
     <Outlet/>
      </>
  );
};

export default App;
