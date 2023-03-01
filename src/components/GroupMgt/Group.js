import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { GroupList } from './GroupList';

const Group = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (
    <div className='App'>
      <div className='AppGlass'>
          <Sidebar
          onCollapse={(inactive) => {
              setInactive(inactive);
          }}
          />
              
          <GroupList/> 
      </div>
    </div>

     
  );
  
}

export default Group