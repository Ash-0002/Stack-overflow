import React from 'react';
import "../../../App.css";

import LeftSidebar from '../../LeftSidebar/LeftSidebar';
import HomeMainbar from "../../HomeMainbar/HomeMainbar";
import RightSidebar from "../../RightSidebar/RightSidebar";

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home