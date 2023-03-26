import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import SprintService from "../../../Services/SprintService";

function SprintList() {
  const [loading, setloading] = useState(true);
  const [sprints, setsprints] = useState(null);

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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
            <tr>
              <td>{sprints.sprintId}</td>
              <td>{sprints.sprintName}</td>
              <td>{sprints.duration}</td>
              <td>{sprints.startDate}</td>
              <td>{sprints.endDate}</td>
              <td>{sprints.sprintGoal}</td>
              <td>
                <i
                  class="bi bi-pen"
                  // onClick={(e, id) => editSystemUser(e, systemUser.systemUserId)}
                ></i>
                <i
                  class="bi bi-trash-fill"
                  // onClick={() => deleteSystemUser(systemUser.systemUserId)}
                  // onClick={() => setShowConfirm(true)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

export default SprintList;
