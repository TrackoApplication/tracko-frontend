import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import './ActiveSprint.css'


import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

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
            <div className='dropDowns'>
              <select>
                <option>Team 1</option>
                <option>Team 2</option>
              </select>
              <select>
                <option>Sprint 1</option>
                <option>Sprint 2</option>
                <option>Sprint 3</option>
                <option>Sprint 4</option>
              </select> 
            </div> 
          </div>
          <div className='table'>
            <div className='columnTopic'>TO DO
              <div>
                <button className='issues'>Issue 1</button>
              </div>
            </div>
            <div className='columnTopic'>IN PROGRESS</div>
            <div className='columnTopic'>READY FOR QA</div>
            <div className='columnTopic'>QA IN PROGRSS</div>
            <div className='columnTopic'>DONE</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveSprint