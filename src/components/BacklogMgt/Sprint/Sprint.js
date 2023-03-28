import React, { useState } from 'react'
// import { UpdateUser } from './UpdateUser';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
// import Avatar from 'react-avatar';
// import ConfirmPopup from './ConfirmPopup';

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
                  onClick={(e,sprintId) => deleteSprint(e, Sprint.sprintId)}
                    // onClick={() => setShowConfirm(true)}
                ></i>
              </td>
            </tr>

            {/* <ConfirmPopup
                show={showConfirm}
                deleteSystemUser={deleteSystemUser}
                onHide={() => setShowConfirm(false)}
                systemUserId={systemUser.systemUserId}
            /> */}
            {/* <UpdateUser
                show={show}
                onHide={() => setShow(false)}
                systemUserId={systemUser.systemUserId}
            /> */}


        </>
    )
}

export default Sprint;