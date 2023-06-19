import React from 'react'
import Dashboard from './Dashboard';
import Sidebar from '../SideBar/Sidebar'
import '../../App.css'
import { useParams } from "react-router-dom";

const DashLayout = () => {
  const { projectId } = useParams();
  const [inactive, setInactive] = React.useState(false);
  
 
  return (
    <div className='App'>
      <div className='AppGlass'>
          <Sidebar
            onCollapse={(inactive) => {
              setInactive(inactive);
          }}
          />
          <Dashboard projectId={projectId}/> 
      </div>
    </div>

     
  );
  
}

export default DashLayout