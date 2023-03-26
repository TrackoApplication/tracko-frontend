import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { ForumList } from './ForumList';

const Forum = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (

    <div className='App'>
    <div className='AppGlass'>
        <Sidebar
        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        />
        <ForumList/>
    
      </div>
    </div>
  )
}

export default Forum