import React, { useState } from "react";

import EpicDeletionConfirmation from "./EpicDeletionConfirmation";


const Epic = ({ epic, deleteEpic }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);



  return (
    <>
    <tr key={epic.Id} className='text-left font-semibold text-gray-500 text-sm px-2 py-2 whitespace-nowrap'>
      <td>{epic.epicId}</td>
      <td>{epic.epicName}</td>
      <td>{epic.Project}</td>
      <td>{epic.epicPriority}</td>
      <td>{epic.epicTeam}</td>
      
      
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
        epicId={Epic.epicId}
      />
    </>
  );
};







export default Epic;