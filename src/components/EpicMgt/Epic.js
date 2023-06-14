import React, { useState } from "react";
import EpicDeletionConfirmation from "./EpicDeletionConfirmation";


const Epic = ({ epic, deleteEpic, key }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  // const [show, setShow] = useState(false);



  return (
    <>
    <tr>
      {/* <td>{epic.id}</td> */}
      <td>{epic.project}</td>
      <td>{epic.epicName}</td>
      <td>{epic.priority}</td>
      <td>{epic.assignee}</td>
      <td>{epic.team}</td>
      
      
      <td>
        {/* redirecting to the Issue deletion confirmation */}
        <i
          class="bi bi-trash-fill"
          // onClick={(e,epicId) => deleteEpic(e, Epic.epicId)}
          onClick={() => setShowConfirm(true)}
        ></i>
      </td>
    </tr>
  {/* posting a confirmation of deletion */}
  <EpicDeletionConfirmation
        show={showConfirm}
        deleteEpic={deleteEpic}
        onHide={() => setShowConfirm(false)}
        epicId={epic.id}
      />
    </>
  );
};

export default Epic;