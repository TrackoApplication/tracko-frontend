import React, { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import UpdateSprint from "./UpdateSprint";

const Sprint = ({ Sprint, deleteSprint, key }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const editSprint = (e, sprintId) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <tr key={Sprint.sprintId}>
        <td>{Sprint.sprintId}</td>
        <td>{Sprint.sprintName}</td>
        <td>{Sprint.duration}</td>
        <td>{Sprint.startDate}</td>
        <td>{Sprint.endDate}</td>
        <td>{Sprint.sprintGoal}</td>
        <td>
          <i
            class="bi bi-pen"
            // onClick={(e, sprintId) => editSprint(e, sprintId)}
            onClick={() => setShow(true)}
          ></i>
          <i
            class="bi bi-trash-fill"
            // onClick={(e,sprintId) => deleteSprint(e, Sprint.sprintId)}
            onClick={() => setShowConfirm(true)}
          ></i>
        </td>
      </tr>

      <DeleteConfirmation
        show={showConfirm}
        deleteSprint={deleteSprint}
        onHide={() => setShowConfirm(false)}
        sprintId={Sprint.sprintId}
      />

      <UpdateSprint
        show={show}
        onHide={() => setShow(false)}
        sprintId={Sprint.sprintId}
      />
    </>
  );
};

export default Sprint;
