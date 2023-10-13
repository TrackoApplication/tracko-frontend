import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { SET_SPRINTS } from "../../../reducers/sprintReducer";
import SprintService from "../../../Services/SprintService";
import Sprint from "./Sprint";
import SuccessfulDeletion from "./SuccessfulDeletion.js";

function SprintList() {
  const [loading, setloading] = useState(true);
  const [sprints, setsprints] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const sprintState = useSelector((state) => state.sprints);
  // const [search, setSearch] = useState("");

  // fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await SprintService.getSprints();
        dispatch({
          type: SET_SPRINTS,
          payload: response.data,
        });
        setsprints(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  // deleting the sprints based on sprintId
  const deleteSprint = (sprintId) => {
    SprintService.deleteSprint(sprintId).then((res) => {
      if (sprints) {
        setsprints((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((Sprint) => Sprint.sprintId !== sprintId);
        });
      }
    });
  };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

        {/* mapping sprints into the sprint table */}
        {!loading && (
          <tbody>
            {sprintState.sprints.map((sprints) => (
              <Sprint
                Sprint={sprints}
                deleteSprint={deleteSprint}
                key={sprints.sprintId}
              ></Sprint>
            ))}
          </tbody>
        )}
      </Table>

      {/* displaying the success message of deleting */}
      <SuccessfulDeletion
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Sprint Deleted Successfully"
      />
    </>
  );
}

export default SprintList;
