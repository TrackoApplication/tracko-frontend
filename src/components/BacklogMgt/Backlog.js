import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Sidebar from '../SideBar/Sidebar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
import Addissue from './Addissue';

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

        <Addissue />
        
    </div>
  );
}

export default Backlog;