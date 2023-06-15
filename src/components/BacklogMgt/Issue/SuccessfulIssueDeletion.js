import React from "react";
import Modal from "react-bootstrap/Modal";
import "./SuccesfulIssueDeletion.css";

const SuccessfulIssueDeletion = (props) => {
  const CallDelete = () => {
    window.location.reload(false);
  };

  return (
    <div>
      {/* popup successful message successful deletion */}
      <Modal
        {...props}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="justify-center "
      >
        <div closeButton className="check-right align-center rounded p-2">
          <div className="flex mx-auto">
            <div className="iconSuccess mx-auto  ">
              <i class="bi bi-check-circle"></i>
            </div>
          </div>
        </div>
        <div className="flex p-5 mx-auto text-xl">{props.message}</div>
        <div className="p-2 mx-auto">
          <btn className="btn btn-green w-20" onClick={() => CallDelete()}>
            OK
          </btn>
        </div>
      </Modal>
    </div>
  );
};

export default SuccessfulIssueDeletion;
