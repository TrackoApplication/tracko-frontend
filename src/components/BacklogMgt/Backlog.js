import React, { useState } from 'react';
import Addissue from './Addissue';
import SprintCreation from './Createsprint';
import SprintUpdation from './UpdateSprint';
import Sprintdeletion from './DeleteSprint';
import SprintCompletion from './CompleteSprint';
import SprintStart from './Sprintstart';
import Backlogtable from './Issuetable';
import Sprinttable from './sprinttable';
import CompleteSprinttable from './Completesprint.table';
import Emptybacklog from './Emptybacklog';
import './Backlog.css';
import { MDBBadge} from 'mdb-react-ui-kit';
import Emptysprintbacklog from './Emptysprintbacklog';
import Emptysprinttable from './Emptysprinttable';

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
  return (

    <div className='BacklogMain'>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <h1>Backlog</h1>
      </div>

      <div className="button-container">
        <MDBBadge color='secondary' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <MDBBadge color='primary' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <MDBBadge color='success' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <SprintCreation /><br />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Emptybacklog/>
      </div>

      <Addissue />

      <div class="button-container">
        <MDBBadge color='secondary' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <MDBBadge color='primary' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <MDBBadge color='success' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <SprintStart />
        <SprintUpdation />
        <Sprintdeletion />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Emptysprintbacklog/>
      </div>

      <div class="button-container">
        <MDBBadge color='secondary' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <MDBBadge color='primary' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <MDBBadge color='success' pill style={{height:"20px",width:"24px", fontSize:"12px"}}>0</MDBBadge>
        <SprintCompletion />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Emptysprinttable />
      </div>

      {/* <div className="button-container">
        <MDBBadge color='secondary' rounded-circle>3</MDBBadge>
        <MDBBadge color='primary' rounded-circle>0</MDBBadge>
        <MDBBadge color='success' rounded-circle>0</MDBBadge>
        <SprintCreation />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Backlogtable />
      </div>

      <Addissue />
      
      <div class="button-container">
        <MDBBadge color='secondary' rounded-circle>2</MDBBadge>
        <MDBBadge color='primary' rounded-circle>0</MDBBadge>
        <MDBBadge color='success' rounded-circle>0</MDBBadge>
        <SprintStart />
        <SprintUpdation />
        <Sprintdeletion />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Sprinttable/>
      </div>

      <div class="button-container">
        <MDBBadge color='secondary' rounded-circle>0</MDBBadge>
        <MDBBadge color='primary' rounded-circle>0</MDBBadge>
        <MDBBadge color='success' rounded-circle>2</MDBBadge>
        <SprintCompletion />
      </div>

      <div className={`container ${inactive ? "inactive" : ""}`}>
        <CompleteSprinttable />
      </div> */}



  </div>
  );
}

export default Backlog;