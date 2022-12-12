import React from 'react';
import "../../../App.css";
import "./Questions.css";

import LeftSidebar from '../../LeftSidebar/LeftSidebar';
import HomeMainbar from "../../HomeMainbar/HomeMainbar";
import RightSidebar from "../../RightSidebar/RightSidebar";

const Questions = () => {
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

export default Questions;