import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Addissue from './Addissue';
import SprintCreation from './Createsprint';
import SprintUpdation from './UpdateSprint';
import Sprintdeletion from './DeleteSprint';
import SprintCompletion from './CompleteSprint';
import SprintStart from './Sprintstart';
import Backlogtable from './Issuetable';


const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
  return (
    <div>

        <div>
          <Sidebar
          onCollapse={(inactive) => {
              setInactive(inactive);
        }}
          />
        </div>


        <div className={`container ${inactive ? "inactive" : ""}`}>
            <h1>Backlog</h1>
        </div>

        <br /><br />

        <div>
          {/* sprint creation will be happen here */}
          <SprintCreation /><br /><br /><br />

        </div>

        <br /><br />

        <div>
          {/* sprint creation will be happen here */}
          <Backlogtable />

          {/* issue creation will be happen here */}
          <Addissue /><br /><br /><br />
        </div>

        <div>

            {/* sprint start page will appear here */}
            <SprintStart /><br /><br /><br />

            {/* update sprint page will appear here */}
            <SprintUpdation /><br /><br /><br />

            {/* delete sprint page will appear here */}
            <Sprintdeletion /><br /><br /><br />

            {/* complete sprint page will appear here */}
            <SprintCompletion />
        </div>

    </div>
  );
}

export default Backlog;