import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const AddProject = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedImage, setSelectedImage] = useState(null);
  //image preview
  const [imagePreview, setImagePreview] = useState(null);
  const [defaultImage, setDefaultImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; //gets the selected image from the 'input' element's 'onchange event' to "files array" as 0th element
    const reader = new FileReader();

    if (!file) {
      setImagePreview(null);
      return;
    }

    reader.onloadend = () => {
      //onloadend is an event handler of Filereader object
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  useEffect(() => {
    setDefaultImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    );
  }, []);

  return (
    <>
      <Button
        variant="primary"
        className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out"
        onClick={handleShow}
      >
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <MDBRow>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="Name"
                    placeholder="Return 0 Software Project"
                    autoFocus
                  />
                </Form.Group>
              </MDBCol>

              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Key</Form.Label>
                  <Form.Control type="Number" placeholder="3329" autoFocus />
                </Form.Group>
              </MDBCol>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Avatar</Form.Label>
                <div>
                <div style={styles.preview && styles.image}>
                    {imagePreview ? ( //this is a conditional redering statement and checks whether the "imagePreview" is true or false.
                   
                      <img src={imagePreview} alt="Preview"  />
                    ) : (
                      <img src={defaultImage} alt="Default" />
                    ) 
                    }
                    
                  </div>
                  <label className="text-left font-sans font-semibold text-xs text-blue-600 hover:text-blue-900">
                    Select image
                    <input
                      type="file"
                      style={styles.input} //adding post css
                      onChange={handleImageUpload}
                    />
                  </label>
                  
                </div>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="Text" placeholder="..........." autoFocus />
              </Form.Group>

              <Form.Label className="mb-3">
                Client
                <Form.Control
                  type="Name"
                  placeholder="Creative Software"
                  autoFocus
                />
              </Form.Label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Project Lead</Form.Label>
                <Form.Select>
                  <option value="">Assignee</option>
                  <option value="">Ravindu Karunaweera</option>
                  <option value="">Yasiru Basura</option>
                  <option value="">Seefa Banu</option>
                </Form.Select>
              </Form.Group>
            </MDBRow>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white "
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] "
            onClick={handleClose}
          >
            Create Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProject;

//Styles for the image preview
const styles = {
  preview: {
    marginTop: 10,
  },

  image: { maxWidth: "20%", maxHeight: 320 },

  input: {
    display: "none", //hides the irrelavent details in the "input" tag
  },
};
