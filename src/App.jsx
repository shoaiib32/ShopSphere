import React, { useState } from "react";

import Home from "./Pages/Home/Home";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <Home active={active} />
    </div>
  );
};

export default App;
