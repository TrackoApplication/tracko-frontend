import React from 'react';
import './Dashboard.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from '../../components/SideBar/Sidebar';

function Dashboard() {
  const [inactive, setInactive] = React.useState(false);


  return (
  
  <div className='App'>
  <div className='DashGlass'>
      <Sidebar
      onCollapse={(inactive) => {
          setInactive(inactive);
      }}
      />
      <MainDash/>
      <RightSide/> 
      </div>
      </div>

     
  );
}

export default Dashboard;
