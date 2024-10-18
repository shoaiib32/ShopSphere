import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";

const Home = ({active,setActive}) => {
  return (
    <>
      <Sidebar active={active}/>
    </>
  );
};

export default Home;
