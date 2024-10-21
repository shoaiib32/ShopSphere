import React, { useState } from "react";

import Home from "./Pages/Home/Home";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Home sidebar={sidebar} />
    </div>
  );
};

export default App;
