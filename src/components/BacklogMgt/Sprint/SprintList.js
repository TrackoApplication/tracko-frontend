import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import SprintService from "../../../Services/SprintService";
import Sprint from "./Sprint";
import SuccessfulDeletion from "./SuccessfulDeletion.js";


function SprintList() {
  const [loading, setloading] = useState(true);
  const [sprints, setsprints] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await SprintService.getSprints();
        setsprints(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  const deleteSprint = (sprintId) => {
    debugger;
    SprintService.deleteSprint(sprintId).then((res) => {
      debugger;
      if (sprints) {
        setsprints((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((Sprint) => Sprint.sprintId !== sprintId);
        });
      }
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <Table striped borderless hover size="sm">
      <thead>
        <th>Sprint ID</th>
        <th>Sprint Name</th>
        <th>Duration</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Sprint Goal</th>
        <td>Actions</td>
      </thead>

      {!loading && (
        <tbody>
          {sprints.map((sprints) => (
            <Sprint
              Sprint={sprints}
              deleteSprint={deleteSprint}
              key={sprints.sprintId}
            ></Sprint>
          ))}
        </tbody>
      )}
    </Table>

    <SuccessfulDeletion
    onHide={() => setShowSuccess(false)}
    show={showSuccess}
    message="Sprint Deleted Successfully"
    />

  </>

  );
}

export default SprintList;
