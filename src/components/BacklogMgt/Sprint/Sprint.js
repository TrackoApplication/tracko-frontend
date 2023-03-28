import React, { useState } from 'react'
import DeleteConfirmation from './DeleteConfirmation';

    const Sprint = ({ Sprint, deleteSprint, key }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [show, setShow] = useState(false);

    // const editSystemUser = (e, id) => {
    //     e.preventDefault();
    //     setShow(true);
    // };

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
                  // onClick={(e, id) => editSystemUser(e, systemUser.systemUserId)}
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

            {/* <UpdateUser
                show={show}
                onHide={() => setShow(false)}
                systemUserId={systemUser.systemUserId}
            /> */}


        </>
    )
}

export default Sprint;