import React, { useState } from "react";
import { UpdateUser } from "./UpdateUser";
import { MDBBadge, MDBBtn } from "mdb-react-ui-kit";
import Avatar from "react-avatar";
import ConfirmPopup from "./ConfirmPopup";

const User = ({ systemUser, deleteSystemUser, key }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [show, setShow] = useState(false);

  const editSystemUser = (e, id) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <tr key={systemUser.systemUserId}>
        <td className="w-[400px]">
          <div className="d-flex align-items-center">
            <Avatar name={systemUser.firstName} size="40" round={true} />
            <div className="ms-3">
              <p className="fw-bold mb-1">{systemUser.firstName}</p>
              <p className="text-muted mb-0">{systemUser.emailId}</p>
            </div>
          </div>
        </td>
        <td className="w-[300px]">
          <p className="fw-normal mb-1 ">{systemUser.role}</p>
        </td>
        <td className="w-[400px]">
          
            {systemUser.accessGroups.map((group) => (
             <>
                {group === " " ? (
                  <MDBBadge color="success"  pill >
                  <span className="mr-2">Not assigned</span>
                  </MDBBadge>
                  
                ) : (
                  <MDBBadge color="success" pill className="mr-2" >
                  <span >{group}</span>
                  </MDBBadge>
                )}
            </>
            ))}
  
        </td>
        {systemUser.role !== "ADMIN" && (
        <td className="w-[200px]">
          <i
            class="bi bi-pen"
            onClick={(e, id) => editSystemUser(e, systemUser.systemUserId)}
          />

          
            <i
              class="bi bi-trash-fill"
              // onClick={() => deleteSystemUser(systemUser.systemUserId)}
              onClick={() => setShowConfirm(true)}
            />
          
        </td>
        )}
      </tr>

      <ConfirmPopup
        show={showConfirm}
        deleteSystemUser={deleteSystemUser}
        onHide={() => setShowConfirm(false)}
        systemUserId={systemUser.systemUserId}
      />

      <UpdateUser
        show={show}
        onHide={() => setShow(false)}
        systemUserId={systemUser.systemUserId}
      />
    </>
  );
};

export default User;
