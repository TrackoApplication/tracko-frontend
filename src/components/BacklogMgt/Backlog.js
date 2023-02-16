import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Addissue from './Addissue';
import SprintCreation from './Createsprint';
import SprintUpdation from './UpdateSprint';
import Sprintdeletion from './DeleteSprint';
import SprintCompletion from './CompleteSprint';
import SprintStart from './Sprintstart';
import Backlogtable from './Issuetable';
import Sprinttable from './sprinttable';
import CompleteSprinttable from './Completesprint.table';
import './Backlog.css';


const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
  return (
    <div>
      
      <div>
          <Sidebar onCollapse={(inactive) => {setInactive(inactive);}}/>
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
          <h1>Backlog</h1>
      </div>

      <br /><br />
      
      <div>
          {/* sprint creation will be happen here */}
          <SprintCreation /><br />
      </div>
      
      <br /><br />

      <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* sprint creation will be happen here */}
          <Backlogtable />
          {/* <BoxComponent/> */}
      </div>

      <br /><br /><br />

      <div>
          {/* issue creation will be happen here */}
          <br /><br />
          <Addissue /><br /><br /><br />

          {/* sprint start page will appear here */}
          <SprintStart />

          {/* update sprint page will appear here */}
          <SprintUpdation />

          {/* delete sprint page will appear here */}
          <Sprintdeletion /><br /><br /><br />

          <div className={`container ${inactive ? "inactive" : ""}`}>
            <Sprinttable/>
          </div>

          <br /><br /><br /><br /><br />

          {/* complete sprint page will appear here */}
          <SprintCompletion />

          <br /><br /><br />

          <div className={`container ${inactive ? "inactive" : ""}`}>
            <CompleteSprinttable/>
          </div>

          
      </div>

    </div>
  );
}

export default Backlog;