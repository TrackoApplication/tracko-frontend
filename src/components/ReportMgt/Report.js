import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import '../../App.css';

const Report = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (

    <div className='App'>
    <div className='AppGlass'>
        <Sidebar
        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        />
        <div className="mainReport">
            <h1>Report</h1> 
        </div>
    </div>
    </div>
  )
}

export default Report