import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Sidebar from '../SideBar/Sidebar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
import Addissue from './Addissue';
import SprintCreation from './Sprintcreation';
import SprintUpdation from './UpdateSprint';

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>

        <Sidebar
        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        />

        {/* create issue page will appear here */}
        <Addissue /><br /><br /><br />

        {/* create sprint page will appear here */}
        <SprintCreation /><br /><br /><br />

        {/* update sprint page will appear here */}
        <SprintUpdation />

    </div>
  );
}

export default Backlog;