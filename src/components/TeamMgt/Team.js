import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import {useRef} from 'react'

const Team = () => {
  const [inactive, setInactive] = React.useState(false);

  const windowWidth = useRef(window.innerWidth);

 
  return (
    <div>

        <Sidebar
        onCollapse={(inactive) => {
            setInactive(inactive);
        }}

        />


      

        <div className={`container ${inactive ? "inactive" : ""}`}>
            
            <h1>Team</h1>
            
        </div>
    </div>
  )
}

export default Team