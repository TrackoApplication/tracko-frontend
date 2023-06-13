import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MDBBadge } from "mdb-react-ui-kit";
import "./CreateSprint.css";

const SprintCreation = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // sprint creation button
  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Button
          variant="primary"
          className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out"
          onClick={handleShow}
        >
          Create Sprint
        </Button>
      </div>
    </div>
  );
};

export default SprintCreation;
