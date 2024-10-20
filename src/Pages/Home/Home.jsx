import Sidebar from "../../Sidebar/Sidebar";
import Feed from "../../Feed/Feed";
import "./Home.css";

const Home = ({ active }) => {
  return (
    <div className="home d-flex  ">
      <div className={`side-bar ${active ? "sidebar" : ""}`} >
      <Sidebar active={active} />
      </div>
      <div className="main-content ">
      <Feed />
      </div>
    </div>
  );
};

export default Home;
