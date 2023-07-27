import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../SideBar/Sidebar";
import "../../App.css";
import EpicService from "../../Services/EpicService";

import Table from "react-bootstrap/Table";
import { MDBBadge } from "mdb-react-ui-kit";

import Epic from "./Epic";
import EpicDeletionSuccessful from "./EpicDeletionSuccessful";

const EpicList = () => {
  // const [inactive, setInactive] = useState(false);
  const [loading, setloading] = useState(true);
  const [epics, setepics] = useState(null);
  // const [LastEpicId,setLastEpicId] = useState(null);

  const [showSuccess, setShowSuccess] = useState(false);

  // fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await EpicService.getEpics();
        setepics(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  // deleting the epics based on epicId
  const deleteEpic = (id) => {
    EpicService.deleteEpic(id).then((res) => {
      if (epics) {
        setepics((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((Epic) => Epic.id !== id);
        });
      }
    });
  };
 
 
  return (
    <>
      <Table striped borderless hover size="sm">
        <thead>
          {/* <th>Epic Id</th> */}
          <th>Project</th>
          <th>Epic Name</th>
          <th>Priority</th>
          <th>Assignee</th>
          <th>Story Points</th>
        </thead>
        {/* mapping epics into the backlog table */}
        {!loading && (
          <tbody>
            {
              epics.map((epic) => (
                <Epic epic={epic} deleteEpic={deleteEpic} key={epic.id}></Epic>
              ))
            }
          </tbody>
        )}
      </Table>

      {/* displaying the success message of deleting */}
      <EpicDeletionSuccessful
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Epic Deleted Successfully"
      />
    </>
  );
};

export default EpicList;
