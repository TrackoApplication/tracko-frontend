import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import './ActiveSprint.css'


const ActiveSprint = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar

        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        
        />

        <div>
          <div className="activeSprint">
            <h2>Active Sprint</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveSprint;