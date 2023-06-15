import React from 'react'
import Sidebar from '../SideBar/Sidebar'


const People = () => {
const [inactive, setInactive] = React.useState(false);
  return (
    <div>
        <Sidebar
        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
            <h1>People</h1>
        </div>
    </div>
  )
}

export default People