import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal with grid
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="bg-blue-300"></Modal.Header>
        <Modal.Body className="show-grid bg-blue-100">
          <div className="flex justify-content-between">
            <div className="d-flex bg-green-100 w-[50%] mx-1">
              <form>

                <div class="row my-3">
                  <div class="col">
                    <label class="form-label m-0">Card Number </label>
                    <input
                      type="text"
                      class="form-control px-1"
                      placeholder="Card Number"
                    />
                  </div>
                </div>

                <div class="row my-3">
                <label class="form-label m-0">Expire Date </label>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control px-1"
                      placeholder="mm"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control px-1"
                      placeholder="yy"
                    />
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col">
                    <label class="form-label m-0">CV Code</label>
                    <input
                      type="text"
                      class="form-control px-1"
                      placeholder="Cv"
                    />
                  </div>
                </div>

                <div class="row my-3">
                  <div class="col">
                    <p class="fpx-1 bg-gray-100 rounded border px-1 py-2"> value Paid</p>
                  </div>
                </div>

              </form>
            </div>
            <div className="d-flex bg-blue-800 w-1"></div>
            <div className="d-flex bg-green-100 w-[50%] mx-1">hhh</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
