import React from "react";

import MenuAppBar from "./Navbar";
import "./Homepageback.css";
import MenuApBar from "./Navbar2";
import Category from "./Category";
import Homepagefront from "./Homepagefront";
const Home = () => {
  return (
    <div>
      <MenuAppBar></MenuAppBar>
      <MenuApBar></MenuApBar>
      <div className="home">
        <div  style={{clear:"both"}}>
      <Category></Category>
      <Homepagefront></Homepagefront>
      </div>
    
      </div>

    </div>
  );
};

export default Home;