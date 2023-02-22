import React from 'react';
import './Dashboard.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';

function Dashboard() {

  return (
      <div className="DashGlass">      
        <MainDash/>
        <RightSide/>
      </div>
  );
}

export default Dashboard;
