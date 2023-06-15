import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteConfirmation from "./DeleteConfirmation";

const SprintDeletion = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* <Button
          variant="primary"
          className="rounded bg-[#ff0000] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#ff0000] ease-in-out"
          onClick={handleShow}
        >
          Delete Sprint
        </Button> */}

        {/* <Modal show={show} onHide={handleClose} animation={false}></Modal> */}
      </div>
    </div>
  );
};

export default SprintDeletion;
